import React, { Component } from 'react';
import './App.css';
import Donut from './donut';
import Line from './line';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Donut />
        <Line />
      </div>
    );
  }
}

export default App;


