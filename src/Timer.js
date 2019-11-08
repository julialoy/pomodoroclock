import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div id="pomodoro">
        <div id="timer">
          {this.props.timeLeft}
        </div>
      </div>
    );
  }
}

export default Timer;