import React, { Component } from 'react';

class TimerControls extends Component {
  render() {
    return (
      <div id="timer-controls-div">
          <div onClick={this.props.timerStartStop} id="start_stop"><i className="fas fa-play"></i><i className="fas fa-pause"></i> </div>
          <div onClick={this.props.timerRestart} id="restart"><i className="fas fa-redo-alt" id="reset"></i></div>
      </div>
    );
  }
}

export default TimerControls;