import {ethers} from 'ethers';
import {networks, fiatCurrencyMap} from './constants';
import PAIR_CONTRACT from '../abis/PairContract.json';
import CURRENCY from '../abis/Currency.json';
import store from '../store/store';
  const convertPrice = (value) => {
    const state = store.getState();
    const currencyConversion = state.currencyConversion;
    const fiatCurrency = state.fiatCurrency;
    const currencyInfo = fiatCurrencyMap[fiatCurrency];
    return Number(value * currencyConversion).toLocaleString(undefined, {
      style: 'currency',
      currency: currencyInfo.label,
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    })
  }
  const loadGas = async () => {
    const state = store.getState();
    const currencyConversion = await getCurrencyConversion(state.fiatCurrency);
    store.dispatch({
      type: 'updateKey',
      payload: {
        key: 'currencyConversion',
        value: currencyConversion
      }
    });
    const promises = Object.values(networks).map((network)=>{
      return getPrices(network.symbol)
      .then((networkInfo)=>{
        const {symbol, ...prices} = networkInfo;
        store.dispatch({
          type: 'updateNetworkPrices',
          payload: {
            network: symbol,
            prices
          }
        });
      });
    });
    Promise.all(promises);
  };

  const getPrices = async (symbol) =>{
    const gasPrice = await getGas(symbol);
    const tokenPrice = await getTokenPrice(symbol);
    const transferPrice = +(ethers.utils.formatUnits(gasPrice.mul('65000'), 'ether'));
    const swapPrice = +(ethers.utils.formatUnits(gasPrice.mul('200000'), 'ether'));
    const lpPrice = +(ethers.utils.formatUnits(gasPrice.mul('175000'), 'ether'));
    return {
      symbol,
      transferPrice,
      swapPrice,
      lpPrice,
      tokenPrice
    }
  }
  const getGas = async (networkSymbol, gasLimit='200000') => {
    const network = networks[networkSymbol];
    const provider = new ethers.providers.JsonRpcProvider(network.rpcURL);
    const gasPrice = await provider.getGasPrice()
    return gasPrice;
  };

  const getTokenPrice = async (networkSymbol) => {
    const network = networks[networkSymbol];
    const LPAddress = network.LPAddress;
    const token0Decimal = network.token0.decimals;
    const token1Decimal = network.token1.decimals;
    const provider = new ethers.providers.JsonRpcProvider(network.rpcURL);
    const pairContract = new ethers.Contract(LPAddress, PAIR_CONTRACT, provider);
    const reserves = await pairContract.getReserves();

    let stableCoin = 0;
    let nativeToken = 0;
    if (network.stableKey === 'token0') {
      stableCoin = ethers.utils.formatUnits(reserves.reserve0, token0Decimal);
      nativeToken = ethers.utils.formatUnits(reserves.reserve1, token1Decimal);
    } else {
      stableCoin = ethers.utils.formatUnits(reserves.reserve1, token1Decimal);
      nativeToken = ethers.utils.formatUnits(reserves.reserve0, token0Decimal);
    }

    return +(stableCoin/nativeToken);
  };

  const getCurrencyConversion = async (currencyKey='usd', clearCache=false) => {
    if(currencyKey === 'usd') return 1;
    if(currencyKey === 'aed') return 0.27;
    const networkParams = networks.ETH;
    const currencyAddress = fiatCurrencyMap[currencyKey].address;

    const provider = new ethers.providers.JsonRpcProvider(networkParams.rpcURL);
    const currenyContract = new ethers.Contract(currencyAddress, CURRENCY, provider);

    let latestAnswer = await currenyContract.latestAnswer();
    latestAnswer = Number(ethers.utils.formatUnits(latestAnswer, 8));
    return +(latestAnswer);
  }

export {
  loadGas,
  convertPrice
}