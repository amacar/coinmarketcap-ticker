import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCoins } from "../actions/coinActions";
import Back from "./Back";

class Refresh extends Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  refresh(e) {
    e.preventDefault();
    const { dispatch, fiat, limit } = this.props;
    dispatch(fetchCoins(fiat, limit));
  }

  render() {
    const style = {
      backgroundColor: "#4CAF50"
    };

    return (
      <div>
        <button style={style} type="button" onClick={this.refresh}>
          Refresh
        </button>
        <Back />
        <br />
        {this.props.lastUpdated && (
          <div>
            Last updated: {new Date(this.props.lastUpdated).toLocaleString()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.coinsReducer.isFetching,
    lastUpdated: state.coinsReducer.lastUpdated,
    fiat: state.filterReducer.fiat,
    limit: state.filterReducer.limit
  };
};

export default withRouter(connect(mapStateToProps)(Refresh));
