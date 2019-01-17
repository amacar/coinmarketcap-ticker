import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CoinRow extends Component {
  constructor(props) {
    super(props);

    this.routeToCoinView = this.routeToCoinView.bind(this);
  }

  routeToCoinView(e) {
    e.preventDefault();
    const locationObject = {
      pathname: "/coin/" + this.props.coin.id,
      state: { prevPath: this.props.location.pathname }
    };
    this.props.history.push(locationObject);
  }

  render() {
    return (
      <tr onClick={this.routeToCoinView}>
        <td>{this.props.coin.rank}</td>
        <td>{this.props.coin.symbol}</td>
        <td>
          {this.props.coin["price_" + this.props.fiatLower]} {this.props.fiat}
        </td>
        <td
          className={
            this.props.coin.percent_change_24h >= 0 ? "positive" : "negative"
          }
        >
          {this.props.coin.percent_change_24h} %
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    fiat: state.filterReducer.fiat,
    fiatLower: state.filterReducer.fiat.toLowerCase()
  };
};

export default withRouter(connect(mapStateToProps)(CoinRow));
