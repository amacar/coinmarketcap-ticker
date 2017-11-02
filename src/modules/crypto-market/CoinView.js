import React, { Component } from 'react';
import CoinApi from '../core/CoinApi';

class CoinView extends Component {
	constructor(props) {
    super(props);
	this.coin = CoinApi.get(props.match.params.id);
	this.coin = this.coin || {};
  }
	
  render() {
    return (
	  <div>
	  <h2>{this.coin.name}</h2>
	  <dl>
	    <dt>Rank</dt>
	    <dd>{this.coin.rank}</dd>
		<dt>Name</dt>
	    <dd>{this.coin.name}</dd>
		<dt>Symbol</dt>
		<dd>{this.coin.symbol}</dd>
		<dt>Price</dt>
		<dd>{this.coin.price_usd}</dd>
		<dt>24h Volume</dt>
		<dd>{this.coin['24h_volume_usd']}</dd>
		<dt>Market Cap</dt>
		<dd>{this.coin.market_cap_usd}</dd>
		<dt>Price (BTC)</dt>
		<dd>{this.coin.price_btc}</dd>
		<dt>Change 1 hour</dt>
		<dd>{this.coin.percent_change_1h}</dd>
		<dt>Change 24 hour</dt>
		<dd>{this.coin.percent_change_24h}</dd>
		<dt>Change 7 days</dt>
		<dd>{this.coin.percent_change_7d}</dd>
		<dt>Total supply</dt>
		<dd>{this.coin.total_supply}</dd>
		<dt>Available supply</dt>
		<dd>{this.coin.available_supply}</dd>
	  </dl>
	  </div>
    );
  }
}

export default CoinView;
