import {
  REQUEST_COINS, RECEIVE_COINS
} from '../actions/coinActions'

const coins = (state, action) => {
  switch (action.type) {
    case REQUEST_COINS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_COINS:
      return {
        ...state,
        isFetching: false,
        coins: action.coins,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export const coinsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COINS:
    case REQUEST_COINS:
      return coins(state, action)
    default:
      return state
  }
}