import React, { Component } from 'react';
import './App.css';
import Donut from './donut';
import Line from './line';
import RadialLine from './radialLine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Donut />
        <Line />
        <RadialLine />
      </div>
    );
  }
}

export default App;


