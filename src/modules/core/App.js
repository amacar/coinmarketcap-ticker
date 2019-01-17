import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCoins } from "./actions/coinActions";
import "./css/App.css";
import Header from "./views/Header";
import Navbar from "./views/Navbar";
import Content from "./views/Content";

class App extends Component {
  componentDidMount() {
    const { dispatch, fiat, limit } = this.props;
    dispatch(fetchCoins(fiat, limit));
  }

  render() {
    return (
      <div className="center">
        <Header />
        <Navbar />
        <Content />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fiat: state.filterReducer.fiat,
    limit: state.filterReducer.limit
  };
};

export default withRouter(connect(mapStateToProps)(App));
