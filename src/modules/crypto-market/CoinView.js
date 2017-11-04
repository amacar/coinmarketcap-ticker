import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Refresh from './Refresh';

class CoinView extends Component {
	
  render() {
	const coin = this.props.coins ? this.props.coins.filter(coin => coin.id === this.props.match.params.id)[0] || {} : {};
	
    return (
	  <div>
	    <Refresh />
	    <h2>{coin.name}</h2>
	    <dl className="inline">
	      <dt>Rank</dt>
	      <dd>{coin.rank}</dd>
  	  	  <dt>Name</dt>
	      <dd>{coin.name}</dd>
		  <dt>Symbol</dt>
		  <dd>{coin.symbol}</dd>
		  <dt>Price</dt>
		  <dd>{coin.price_usd}</dd>
		  <dt>24h Volume</dt>
		  <dd>{coin['24h_volume_usd']}</dd>
		  <dt>Market Cap</dt>
		  <dd>{coin.market_cap_usd}</dd>
		  <dt>Price (BTC)</dt>
		  <dd>{coin.price_btc}</dd>
		  <dt>Change (1 hour)</dt>
		  <dd className={coin.percent_change_1h >= 0 ? 'positive' : 'negative'}>{coin.percent_change_1h}</dd>
		  <dt>Change (24 hour)</dt>
		  <dd className={coin.percent_change_24h >= 0 ? 'positive' : 'negative'}>{coin.percent_change_24h}</dd>
		  <dt>Change (7 days)</dt>
		  <dd className={coin.percent_change_7d >= 0 ? 'positive' : 'negative'}>{coin.percent_change_7d}</dd>
		  <dt>Total supply</dt>
		  <dd>{coin.total_supply}</dd>
		  <dt>Available supply</dt>
		  <dd>{coin.available_supply}</dd>
	    </dl>
	  </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coinsReducer.coins,
    isFetching: state.coinsReducer.isFetching,
    lastUpdated: state.coinsReducer.lastUpdated
  }
}

export default withRouter(connect(mapStateToProps)(CoinView));
