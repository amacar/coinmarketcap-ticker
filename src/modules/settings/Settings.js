import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {FIAT_ENUM} from '../core/enums/FiatEnum'
import { fetchCoins } from '../core/actions/coinActions'
import { selectFiat } from '../core/actions/filterActions'
import Back from '../core/components/Back'
import './css/Settings.css'

class Settings extends Component {
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
	const { dispatch } = this.props
	dispatch(selectFiat(event.target.value));
	console.log(this.props.location.state.prevPath)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fiat !== this.props.fiat) {
      const { dispatch, fiat, limit } = nextProps
      dispatch(fetchCoins(fiat, limit));
    }
  }
  
  prepareOptions() {
	let options = [];
	for (var fiat in FIAT_ENUM) {
	  options.push(<option key={fiat} value={fiat}>{fiat}</option>)
	}
	
	options = options.map(function(option, i){
      return option;
    });
	
    return options;	
  }
  
  render() {  
    return (
	  <div className="settings">
	    <div>
	      <Back />
		</div>
        <label>
          Select currency:
          <select value={this.props.fiat} onChange={this.handleChange}>
		    {this.prepareOptions()}
          </select>
        </label>
	  </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fiat: state.filterReducer.fiat,
	limit: state.filterReducer.limit
  }
}

export default withRouter(connect(mapStateToProps)(Settings));