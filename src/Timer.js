import React, { Component } from 'react';


class Timer extends Component {
  
  formatAsTime = (time) => {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time - mins * 60);
    mins = mins.toString();
    secs = secs.toString();
    if (secs.length === 1) {
      secs = '0' + secs;
    }
    return mins.concat(':', secs);
  }
  
  render() {
    return (
      <div id="pomodoro">
        <div id="timer">
          <p id="time-left">{ this.formatAsTime(this.props.timeLeft) }</p>
          <p id="timer-label">{ this.props.sessionOrBreak }</p>
        </div>
      </div>
    );
  }
}

export default Timer;