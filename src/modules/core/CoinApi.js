// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const CoinApi = {
  coins: [
    {
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "6976.23", 
        "price_btc": "1.0", 
        "24h_volume_usd": "4120180000.0", 
        "market_cap_usd": "116222945366", 
        "available_supply": "16659850.0", 
        "total_supply": "16659850.0", 
        "percent_change_1h": "-1.44", 
        "percent_change_24h": "6.35", 
        "percent_change_7d": "18.91", 
        "last_updated": "1509626050"
    }, 
    {
        "id": "ethereum", 
        "name": "Ethereum", 
        "symbol": "ETH", 
        "rank": "2", 
        "price_usd": "289.847", 
        "price_btc": "0.0420543", 
        "24h_volume_usd": "843276000.0", 
        "market_cap_usd": "27673444228.0", 
        "available_supply": "95476042.0", 
        "total_supply": "95476042.0", 
        "percent_change_1h": "0.42", 
        "percent_change_24h": "-3.04", 
        "percent_change_7d": "-2.77", 
        "last_updated": "1509626061"
    }, 
    {
        "id": "bitcoin-cash", 
        "name": "Bitcoin Cash", 
        "symbol": "BCH", 
        "rank": "3", 
        "price_usd": "555.209", 
        "price_btc": "0.0805561", 
        "24h_volume_usd": "1482370000.0", 
        "market_cap_usd": "9301555179.0", 
        "available_supply": "16753250.0", 
        "total_supply": "16753250.0", 
        "percent_change_1h": "-1.31", 
        "percent_change_24h": "12.01", 
        "percent_change_7d": "63.89", 
        "last_updated": "1509626062"
    }, 
    {
        "id": "ripple", 
        "name": "Ripple", 
        "symbol": "XRP", 
        "rank": "4", 
        "price_usd": "0.194787", 
        "price_btc": "0.00002826", 
        "24h_volume_usd": "142891000.0", 
        "market_cap_usd": "7505442872.0", 
        "available_supply": "38531538922.0", 
        "total_supply": "99993667738.0", 
        "percent_change_1h": "1.68", 
        "percent_change_24h": "-1.51", 
        "percent_change_7d": "-4.86", 
        "last_updated": "1509626041"
    }, 
    {
        "id": "litecoin", 
        "name": "Litecoin", 
        "symbol": "LTC", 
        "rank": "5", 
        "price_usd": "52.9823", 
        "price_btc": "0.00768727", 
        "24h_volume_usd": "176695000.0", 
        "market_cap_usd": "2842311374.0", 
        "available_supply": "53646432.0", 
        "total_supply": "53646432.0", 
        "percent_change_1h": "0.08", 
        "percent_change_24h": "-3.48", 
        "percent_change_7d": "-5.83", 
        "last_updated": "1509626042"
    }, 
    {
        "id": "dash", 
        "name": "Dash", 
        "symbol": "DASH", 
        "rank": "6", 
        "price_usd": "266.315", 
        "price_btc": "0.0386401", 
        "24h_volume_usd": "67621300.0", 
        "market_cap_usd": "2039485147.0", 
        "available_supply": "7658169.0", 
        "total_supply": "7658169.0", 
        "percent_change_1h": "2.3", 
        "percent_change_24h": "-2.89", 
        "percent_change_7d": "-7.3", 
        "last_updated": "1509626043"
    }, 
    {
        "id": "bitconnect", 
        "name": "BitConnect", 
        "symbol": "BCC", 
        "rank": "7", 
        "price_usd": "258.096", 
        "price_btc": "0.0374476", 
        "24h_volume_usd": "24299400.0", 
        "market_cap_usd": "1898162766.0", 
        "available_supply": "7354483.0", 
        "total_supply": "8385415.0", 
        "percent_change_1h": "-2.44", 
        "percent_change_24h": "6.2", 
        "percent_change_7d": "19.87", 
        "last_updated": "1509626056"
    }, 
    {
        "id": "neo", 
        "name": "NEO", 
        "symbol": "NEO", 
        "rank": "8", 
        "price_usd": "25.7604", 
        "price_btc": "0.00373762", 
        "24h_volume_usd": "71319900.0", 
        "market_cap_usd": "1674426000.0", 
        "available_supply": "65000000.0", 
        "total_supply": "100000000.0", 
        "percent_change_1h": "4.29", 
        "percent_change_24h": "-4.66", 
        "percent_change_7d": "-9.81", 
        "last_updated": "1509626059"
    }, 
    {
        "id": "nem", 
        "name": "NEM", 
        "symbol": "XEM", 
        "rank": "9", 
        "price_usd": "0.165587", 
        "price_btc": "0.00002403", 
        "24h_volume_usd": "8835230.0", 
        "market_cap_usd": "1490283000.0", 
        "available_supply": "8999999999.0", 
        "total_supply": "8999999999.0", 
        "percent_change_1h": "5.19", 
        "percent_change_24h": "-6.47", 
        "percent_change_7d": "-18.06", 
        "last_updated": "1509626047"
    }, 
    {
        "id": "monero", 
        "name": "Monero", 
        "symbol": "XMR", 
        "rank": "10", 
        "price_usd": "84.5624", 
        "price_btc": "0.0122693", 
        "24h_volume_usd": "50754000.0", 
        "market_cap_usd": "1293761700.0", 
        "available_supply": "15299491.0", 
        "total_supply": "15299491.0", 
        "percent_change_1h": "1.75", 
        "percent_change_24h": "-1.9", 
        "percent_change_7d": "-4.92", 
        "last_updated": "1509626044"
    }
],
  all: function() { return this.coins},
  get: function(id) {
    const isCoin = p => p.id === id
    return this.coins.find(isCoin)
  }
}

export default CoinApi
