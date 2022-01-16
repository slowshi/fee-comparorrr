const fiatCurrencyMap = {
  usd: {
    label: 'USD',
    address: ''
  },
  aud: {
    label: 'AUD',
    address: '0x77F9710E7d0A19669A13c055F62cd80d313dF022'
  },
  cad: {
    label: 'CAD',
    address: '0xa34317db73e77d453b1b8d04550c44d10e981c8e'
  },
  eur: {
    label: 'EUR',
    address: '0xb49f677943bc038e9857d61e7d053caa2c1734c1'
  },
  gbp: {
    label: 'GBP',
    address: '0x5c0ab2d9b5a7ed9f470386e82bb36a3613cdd4b5'
  },
  sgd: {
    label: 'SGD',
    address: '0xe25277ff4bbf9081c75ab0eb13b4a13a721f3e13'
  },
  inr: {
    label: 'INR',
    address: '0x605d5c2fbcedb217d7987fc0951b5753069bc360'
  },
  php: {
    label: 'PHP',
    address: '0x9481e7ad8be6bbb22a8b9f7b9fb7588d1df65df6'
  },
  brl: {
    label: 'BRL',
    address: '0x971e8f1b779a5f1c36e1cd7ef44ba1cc2f5eee0f'
  },
  jpy: {
    label: 'JPY',
    address: '0xbce206cae7f0ec07b545edde332a47c2f75bbeb3'
  },
  aed: {
    label: 'AED',
    address: ''
  }
}

const networks = {
  FTM: {
    symbol: 'FTM',
    name: 'Fantom',
    rpcURL: 'https://rpc.ftm.tools',
    chartURL: 'https://dexscreener.com/fantom/',
    blockRateSeconds: .9,
    stableKey: "token0",
    LPAddress: "0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c",
    token0: {
        address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
        decimals: 6
    },
    token1: {
        address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
        decimals: 18
    }
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    rpcURL: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    chartURL: 'https://dexscreener.com/ethereum/',
    blockRateSeconds: 13.14,
    stableKey: "token0",
    LPAddress: "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0",
    token0: {
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        decimals: 6
    },
    token1: {
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals: 18
    }
  },
  MATIC: {
    symbol: 'MATIC',
    name: 'Polygon',
    rpcURL: 'https://polygon-rpc.com',
    chartURL: 'https://dexscreener.com/polygon/',
    blockRateSeconds: 2.26,
    stableKey: "token0",
    LPAddress: "0x1E67124681b402064CD0ABE8ed1B5c79D2e02f64",
    token0: {
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        decimals: 6
    },
    token1: {
        address: "0x2F800Db0fdb5223b3C3f354886d907A671414A7F",
        decimals: 18
    }
  },
  AVAX: {
    symbol: 'AVAX',
    name: 'Avalanche',
    rpcURL: 'https://api.avax.network/ext/bc/C/rpc',
    chartURL: 'https://dexscreener.com/avalanche/',
    blockRateSeconds: 2,
    stableKey: "token1",
    LPAddress: "0xeD8CBD9F0cE3C6986b22002F03c6475CEb7a6256",
    token0: {
        address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        decimals: 18
    },
    token1: {
        address: "0xc7198437980c041c805a1edcba50c1ce5db95118",
        decimals: 6
    }
  },
  ONE: {
    symbol: 'ONE',
    name: 'Harmony',
    rpcURL: 'https://api.harmony.one/',
    chartURL: 'https://dexscreener.com/harmony/',
    blockRateSeconds: 2,
    stableKey: "token0",
    LPAddress: "0x66C17f5381d7821385974783BE34c9b31f75Eb78",
    token0: {
      address: "0x985458e523db3d53125813ed68c274899e9dfab4",
      decimals: 6
    },
    token1: {
      address: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
      decimals: 18
    }
  },
  ARB: {
    symbol: 'ARB',
    name: 'Arbitrum',
    rpcURL: 'https://arb1.arbitrum.io/rpc',
    chartURL: 'https://dexscreener.com/arbitrum/',
    blockRateSeconds: 3.02,
    stableKey: "token1",
    LPAddress: "0xb6dd51d5425861c808fd60827ab6cfbffe604959",
    token0: {
        address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
        decimals: 18
    },
    token1: {
        address: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
        decimals: 18
    }
  },
  BSC: {
    symbol: 'BSC',
    name: 'Binance',
    rpcURL: 'https://bsc-dataseed1.defibit.io/',
    chartURL: 'https://dexscreener.com/bsc/',
    blockRateSeconds: 3.00,
    stableKey: "token1",
    LPAddress: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    token0: {
        address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        decimals: 18
    },
    token1: {
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        decimals: 18
    }
  },
  MOVR: {
    symbol: 'MOVR',
    name: 'Moonriver',
    rpcURL: 'https://rpc.moonriver.moonbeam.network/',
    chartURL: 'https://dexscreener.com/moonriver/',
    blockRateSeconds: 12.69,
    stableKey: "token1",
    LPAddress: "0xe537f70a8b62204832B8Ba91940B77d3f79AEb81",
    token0: {
        address: "0x98878B06940aE243284CA214f92Bb71a2b032B8A",
        decimals: 18
    },
    token1: {
        address: "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
        decimals: 6
    }
  },
  CRO: {
    symbol: 'CRO',
    name: 'Cronos',
    rpcURL: 'https://rpc.vvs.finance/',
    chartURL: 'https://dexscreener.com/cronos/',
    blockRateSeconds: 5.5,
    stableKey: "token1",
    LPAddress: "0xe61Db569E231B3f5530168Aa2C9D50246525b6d6",
    token0: {
        address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
        decimals: 18
    },
    token1: {
        address: "0xc21223249ca28397b4b6541dffaecc539bff0c59",
        decimals: 6
    }
  }
  // KLAY: {
  //   symbol: 'KLAY',
  //   name: 'Klaytn',
  //   rpcURL: 'https://en.kronosdao.finance/',
  //   chartURL: 'https://dexscreener.com/cronos/',
  //   blockRateSeconds: 5.5
  // }
};

const reducerKeys = {
  CURRENCY_CONERSION: 'CURRENCY_CONVERSION',
  CURRENCY_KEY: 'CURRENCY_KEY',
}


export {
  fiatCurrencyMap,
  networks
}