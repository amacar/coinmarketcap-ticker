import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CoinRow extends Component {
	constructor(props) {
    super(props);

	this.routeToCoinView = this.routeToCoinView.bind(this);
  }
	
  routeToCoinView(e) {
    e.preventDefault();

    this.context.router.transitionTo('/coin')
  }
	
  render() {
    return (
	  <tr>
	    <td><Link to={`/coin/${this.props.coin.id}`}>{this.props.coin.rank}</Link></td>
		<td>{this.props.coin.symbol}</td>
		<td>{this.props.coin.price_usd}</td>
		<td className={this.props.coin.percent_change_24h >= 0 ? 'positive' : 'negative'}>{this.props.coin.percent_change_24h} %</td>
	  </tr>
    );
  }
}

export default withRouter(CoinRow);
