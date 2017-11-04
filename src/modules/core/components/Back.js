import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './css/Back.css';

class Back extends Component {
	constructor(props) {
    super(props);

	this.goBack = this.goBack.bind(this);
  }
	
  goBack (e) {
    e.preventDefault();
	if(this.hasStatePrevPath()) {
 	  this.props.history.goBack();
	}
   }
   
   hasStatePrevPath() {
     return this.props.location.state && this.props.location.state.prevPath;
   }
	
  render() {
    return (
	  <span>
	    {this.hasStatePrevPath() &&
	      <button className="back" type="button" onClick={this.goBack}>
	        Back
          </button>
        }
	  </span>
    );
  }
}

export default withRouter(Back);
