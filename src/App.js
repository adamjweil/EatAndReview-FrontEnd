import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Restaurant from './components/restaurant.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Restaurant />
      </div>
    );
  }
}

export default App;
