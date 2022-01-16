import {createStore} from 'redux';
import reducerApp from './reducers/reducerApp';
const searchParams = (new URL(document.location)).searchParams;
let fiatCurrency = 'usd';
if (searchParams.has('currency')) {
  fiatCurrency = searchParams.get('currency');
}
const store = createStore(reducerApp,
{
  fiatCurrency,
  currencyConversion: 1,
  networkInfo: {}
});


export default store;