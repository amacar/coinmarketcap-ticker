import React, { Component } from 'react';

class Settings extends Component {
    constructor(props) {
    super(props);
	this.state = {showBackButton: false};

	this.goBack = this.goBack.bind(this);
  }
	
  goBack(e) {
    e.preventDefault();
	this.props.history.goBack();
  }
  
  render() {
    return (
	  <div onClick={this.goBack}>
        Settings {this.state.showBackButton}
	  </div>
    );
  }
}

export default Settings;
