import React, { Component } from 'react';

class Session extends Component {

  decrementSessionLength = () => {
    if (this.props.sessionLength - 60 > 0) {
      this.props.onSessLngthChange(-60);
    }
  }

  incrementSessionLength = () => {
    if (Math.floor((this.props.sessionLength + 60) / 60) <= 60) {
      this.props.onSessLngthChange(60);
    }
  }

  render() {
    let downArrow = <i onClick={this.decrementSessionLength} className="fas fa-arrow-down" id="session-down-arrow-active"></i>;
    let upArrow = <i onClick={this.incrementSessionLength} className="fas fa-arrow-up" id="session-up-arrow-active"></i>;
    if (this.props.timeRunning === false) {
      downArrow = <i className="fas fa-arrow-down" id="session-down-arrow-inactive"></i>;
      upArrow = <i className="fas fa-arrow-up" id="session-up-arrow-inactive"></i>
    }
    return (
      <div id="session-div">
        <p id="session-label">Session</p>
        <p>
          <span id="session-decrement">{downArrow} </span>
          <span id="session-length">{ this.props.numToString(this.props.sessionLength) }</span>
          <span id="session-increment"> {upArrow}</span>
        </p>
      </div>
    );
  }
}

export default Session;