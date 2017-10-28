import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './demo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome buttonText="Hello World"/>
        <Welcome buttonText="Another Same Button"/>
        <div id="component"></div>
      </div>
    );
  }
}

export default App;
