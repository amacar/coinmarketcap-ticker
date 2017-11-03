export const REQUEST_COINS = 'REQUEST_COINS'
export const RECEIVE_COINS = 'RECEIVE_COINS'

export const requestCoins = () => ({
  type: REQUEST_COINS,
})

export const receiveCoins = (json) => ({
  type: RECEIVE_COINS,
  coins: json,
  receivedAt: Date.now()
})

const fetchCoins = () => dispatch => {
  dispatch(requestCoins())
  return fetch('https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=100')
    .then(response => response.json())
    .then(json => dispatch(receiveCoins(json)))
}

export const fetchCoinsIfNeeded = () => (dispatch, getState) => {
  return dispatch(fetchCoins())
}
