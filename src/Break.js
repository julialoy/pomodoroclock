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
    if (this.props.timeRunning === true) {
      downArrowId = "break-down-arrow-inactive";
      upArrowId = "break-up-arrow-inactive";
      decClickFunc = null;
      incClickFunc = null;
    }
    if (this.props.breakLength === 60) {
      decClickFunc = null;
      downArrowId = "break-down-arrow-inactive";
    }
    if (this.props.breakLength === 3600) {
      incClickFunc = null;
      upArrowId = "break-up-arrow-inactive";
    }
    console.log("BREAK LENGTH: ", this.props.breakLength);
    return (
      <div id="break-div">
        <div id="break-label">Break</div>
        <div> 
          <div onClick={decClickFunc} id="break-decrement"><i className="fas fa-arrow-down" id={downArrowId}></i> </div>
          <div id="break-length">{ this.props.numToString(this.props.breakLength) }</div>
          <div onClick={incClickFunc} id="break-increment"> <i className="fas fa-arrow-up" id={upArrowId}></i></div>
        </div>
      </div>
    );
  }
}

export default Break;