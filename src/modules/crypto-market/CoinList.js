import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CoinRow from "./CoinRow";
import Refresh from "../core/components/Refresh";
import "./css/CryptoMarket.css";

class CoinList extends Component {
  render() {
    return (
      <div>
        <Refresh />
        {this.props.isFetching ? (
          "Loading..."
        ) : (
          <table className="coin-list">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Change (24 hour)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.coins &&
                this.props.coins.map(function(coin, i) {
                  return <CoinRow coin={coin} key={i} />;
                })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coins: state.coinsReducer.coins,
    isFetching: state.coinsReducer.isFetching
  };
};

export default withRouter(connect(mapStateToProps)(CoinList));
