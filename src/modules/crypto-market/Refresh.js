import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCoins } from '../core/actions/coinActions'
import './css/Refresh.css';

class Refresh extends Component {
	constructor(props) {
    super(props);

	this.refresh = this.refresh.bind(this);
  }
	
  refresh(e) {
    e.preventDefault();
	const { dispatch, fiat, limit } = this.props
    dispatch(fetchCoins(fiat, limit));
  }
	
  render() {
    return (
	  <div>
	    <button className="refresh" type="button" onClick={this.refresh}>
	      Refresh
        </button>
		<br/>
		Last updated: {new Date(this.props.lastUpdated).toLocaleString()}
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
  }
}

export default withRouter(connect(mapStateToProps)(Refresh));
