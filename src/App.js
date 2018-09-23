import React, { Component } from 'react';
import './App.css';
import Donut from './donut';
import Line from './line';
import RadialLine from './radialLine';
import Area from './area';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Area />
        <RadialLine />
        <Line />
        <Donut />
      </div>
    );
  }
}

export default App;


