import React, { Component } from 'react';
import './App.css';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';

const DEFAULT_START_TIME = "25:00"

class App extends Component {

  state = {
    timeLeft: DEFAULT_START_TIME
  }

  render() {
    return (
      <div id="clock-container">
        <Break />
        <Session />
        <Timer 
          timeLeft={this.state.timeLeft}
        />
      </div>
    );
  }
}

export default App;
