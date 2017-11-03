import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class CoinView extends Component {
	
  render() {
    return (
	  <div>
	  <h2>{this.props.coin.name}</h2>
	  <dl className="inline">
	    <dt>Rank</dt>
	    <dd>{this.props.coin.rank}</dd>
		<dt>Name</dt>
	    <dd>{this.props.coin.name}</dd>
		<dt>Symbol</dt>
		<dd>{this.props.coin.symbol}</dd>
		<dt>Price</dt>
		<dd>{this.props.coin.price_usd}</dd>
		<dt>24h Volume</dt>
		<dd>{this.props.coin['24h_volume_usd']}</dd>
		<dt>Market Cap</dt>
		<dd>{this.props.coin.market_cap_usd}</dd>
		<dt>Price (BTC)</dt>
		<dd>{this.props.coin.price_btc}</dd>
		<dt>Change (1 hour)</dt>
		<dd>{this.props.coin.percent_change_1h}</dd>
		<dt>Change (24 hour)</dt>
		<dd>{this.props.coin.percent_change_24h}</dd>
		<dt>Change (7 days)</dt>
		<dd>{this.props.coin.percent_change_7d}</dd>
		<dt>Total supply</dt>
		<dd>{this.props.coin.total_supply}</dd>
		<dt>Available supply</dt>
		<dd>{this.props.coin.available_supply}</dd>
	  </dl>
	  </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coin: state.coinsReducer.coins ? state.coinsReducer.coins.filter(coin => coin.id === ownProps.match.params.id)[0] : {},
    isFetching: state.coinsReducer.isFetching,
    lastUpdated: state.coinsReducer.lastUpdated
  }
}

export default withRouter(connect(mapStateToProps)(CoinView));
