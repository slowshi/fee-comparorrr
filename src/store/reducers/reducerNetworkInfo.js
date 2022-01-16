const initialState = Object.freeze({});

const networkInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateNetworkPrice":
      return {
        ...state,
        [action.payload.network]: {
          ...state[action.payload.network],
          ...action.payload.price
        }
      }
    default:
    return state
  }
}

export default networkInfoReducer;