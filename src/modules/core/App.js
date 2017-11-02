import React, { Component } from 'react';
import './css/App.css';
import Header from './views/Header';
import Navbar from './views/Navbar';
import Content from './views/Content';

class App extends Component {
  render() {
    return (
	  <div>
        <Header />
	    <Navbar />
		<Content />
	  </div>
    );
  }
}

export default App;
