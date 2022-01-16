const initialState = Object.freeze({
  fiatCurrency: '',
  currencyConversion: 1,
  networkInfo: {}
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "clearApp":
      return initialState;
    case "updateAppKey":
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    case "updateNetworkPrices":
      return {
        ...state,
        networkInfo: {
          ...state.networkInfo,
          [action.payload.network]: {
            ...state.networkInfo[action.payload.network],
            ...action.payload.prices
          }
        }
      }
    default:
    return state
  }
}

export default appReducer;


