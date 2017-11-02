import React, { Component } from 'react';
import CoinRow from './CoinRow';
import CoinApi from '../core/CoinApi';

class CoinList extends Component {
  
  render() {
    return (
	  <div>
        <table>
		  <thead>
		    <tr>
			  <th>Rank</th>
			  <th>Symbol</th>
			  <th>Price</th>
			  <th>24h change</th>
			</tr>
		  </thead>
		  <tbody>
		    {CoinApi.all().map(function(coin, i){
              return <CoinRow coin={coin} key={i}/>
             })
			}
		  </tbody>
		</table>
	  </div>
    );
  }
}

export default CoinList;
