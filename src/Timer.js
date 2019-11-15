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
    if (mins.length === 1) {
      mins = '0' + mins;
    }
    return mins.concat(':', secs);
  }
  
  render() {
    return (
      <div id="pomodoro">
        <div id="timer">
          <div id="timer-label">{ this.props.sessionOrBreak }</div>
          <div id="time-left">{ this.formatAsTime(this.props.timeLeft) }</div>
        </div>
      </div>
    );
  }
}

export default Timer;