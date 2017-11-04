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

export const fetchCoins = (fiat, limit) => dispatch => {
	console.log("fetch", fiat, limit);
  dispatch(requestCoins());
  return fetch(`https://api.coinmarketcap.com/v1/ticker/?convert=${fiat}&limit=${limit}`)
    .then(response => response.json())
    .then(json => dispatch(receiveCoins(json)))
}