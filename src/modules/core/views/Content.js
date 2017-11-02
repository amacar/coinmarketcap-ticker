import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../css/App.css';
import Settings from '../../settings/Settings';
import CoinList from '../../crypto-market/CoinList';
import CoinView from '../../crypto-market/CoinView';
import NotFound from './NotFound';

class Content extends Component {
  render() {
    return (
      <div>
	    <Switch>
          <Route exact path='/' component={CoinList}/>
          <Route path='/settings' component={Settings}/>
		  <Route path='/coin/:id' component={CoinView}/>
		  <Route component={NotFound}/>
		</Switch>
      </div>
    );
  }
}

export default Content;
