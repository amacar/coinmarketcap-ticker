import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Back extends Component {
	constructor(props) {
    super(props);

	this.goBack = this.goBack.bind(this);
  }
	
  goBack(e) {
    e.preventDefault();
	if(this.hasStatePrevPath()) {
 	  this.props.history.goBack();
    }
  }
   
  hasStatePrevPath() {
    return this.props.location.state && this.props.location.state.prevPath;
  }
	
  render() {
    const style = {
      backgroundColor: '#dc5252',
    };
	
    return (
	  <span>
	    {this.hasStatePrevPath() &&
	      <button style={style} type="button" onClick={this.goBack}>
	        Back
          </button>
        }
	  </span>
    );
  }
}

export default withRouter(Back);
