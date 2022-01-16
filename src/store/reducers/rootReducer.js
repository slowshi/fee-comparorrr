import {combineReducers} from 'redux';
import reducerApp from './reducerApp';
import networkInfoReducer from './reducerNetworkInfo';

const rootReducer = combineReducers({
  app: reducerApp,
  networkInfo: networkInfoReducer,
});

export default rootReducer;