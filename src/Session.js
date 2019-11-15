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
    let downArrow = "session-down-arrow-active";
    let upArrow = "session-up-arrow-active";
    let incFunc = this.incrementSessionLength;
    let decFunc = this.decrementSessionLength;
    if (this.props.timeRunning === true) {
      downArrow = "session-down-arrow-inactive";
      upArrow = "session-up-arrow-inactive";
      incFunc = null;
      decFunc = null;
    }
    if (this.props.sessionLength === 60) {
      decFunc = null;
      downArrow = "session-down-arrow-inactive";
    }
    if (this.props.sessionLength === 3600) {
      incFunc = null;
      upArrow = "session-up-arrow-inactive";
    }
    return (
      <div id="session-div">
        <div id="session-label">Session</div>
        <div>
          <div onClick={decFunc} id="session-decrement"><i className="fas fa-arrow-down" id={downArrow}></i> </div>
          <div id="session-length">{ this.props.numToString(this.props.sessionLength) }</div>
          <div onClick={incFunc} id="session-increment"> <i className="fas fa-arrow-up" id={upArrow}></i></div>
        </div>
      </div>
    );
  }
}

export default Session;