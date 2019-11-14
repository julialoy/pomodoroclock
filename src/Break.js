import React, { Component } from 'react';
import 'react-bootstrap';

class Break extends Component {

  decrementBreakLength = () => {
    if (this.props.breakLength - 60 > 0) {
      this.props.onBrkLngthChange(-60);
    }
  }

  incrementBreakLength = () => {
    if (Math.floor((this.props.breakLength + 60) / 60) <= 60) {
      this.props.onBrkLngthChange(60);
    }
  }

  render() {
    let downArrowId = "break-down-arrow-active";
    let upArrowId = "break-up-arrow-active";
    let decClickFunc = this.decrementBreakLength;
    let incClickFunc = this.incrementBreakLength;
    if (this.props.timeRunning === false) {
      downArrowId = "break-down-arrow-inactive";
      upArrowId = "break-up-arrow-inactive";
    }
    if (this.props.breakLength === 60) {
      decClickFunc = null;
      downArrowId = "break-down-arrow-inactive";
    }
    if (this.props.breakLength === 3600) {
      incClickFunc = null;
      upArrowId = "break-up-arrow-inactive";
    }
    return (
      <div id="break-div">
        <p id="break-label">Break</p>
        <p> 
          <span onClick={decClickFunc} id="break-decrement"><i className="fas fa-arrow-down" id={downArrowId}></i> </span>
          <span id="break-length">{ this.props.numToString(this.props.breakLength) }</span>
          <span onClick={incClickFunc} id="break-increment"> <i className="fas fa-arrow-up" id={upArrowId}></i></span>
        </p>
      </div>
    );
  }
}

export default Break;