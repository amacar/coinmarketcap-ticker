export const REQUEST_COINS = "REQUEST_COINS";
export const RECEIVE_COINS = "RECEIVE_COINS";
const BASE_API_URL = "https://api.coinmarketcap.com/v1/";

export const requestCoins = () => ({
  type: REQUEST_COINS
});

export const receiveCoins = json => ({
  type: RECEIVE_COINS,
  coins: json,
  receivedAt: Date.now()
});

export const fetchCoins = (fiat, limit) => dispatch => {
  dispatch(requestCoins());
  return fetch(BASE_API_URL + `ticker/?convert=${fiat}&limit=${limit}`)
    .then(response => response.json())
    .then(json => dispatch(receiveCoins(json)));
};
