import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';
import TimerControls from './TimerControls';

const DEFAULT_START_TIME = 1500;
const DEFAULT_BREAK = 300;

class App extends Component {

  state = {
    sessionLength: DEFAULT_START_TIME,
    breakLength: DEFAULT_BREAK,
    timeLeft: DEFAULT_START_TIME,
    sessionOrBreak: "Session",
    timeRunning: false,
    audioURL: "https://goo.gl/65cBl1"
  }

  intervalCode = null;

  formatAsString = (time) => {
    let minutes = Math.floor(time / 60).toString();
    return minutes;
  }

  handleSwitch = () => {
    let timerState = null;
    let setTimeLeft = null;
    if (this.state.sessionOrBreak === "Session") {
      timerState = "Break";
      setTimeLeft = this.state.breakLength;
    } else {
      timerState = "Session";
      setTimeLeft = this.state.sessionLength;
    }
    this.setState((prevState, props) => ({
      timeLeft: setTimeLeft,
      sessionOrBreak: timerState
    }));
  }

  decrementTimer = () => {
    if (this.state.timeLeft === 0) {
      this.audioBeep.play();
      this.handleSwitch();
    } else {
      this.setState((prevState, props) => ({
        timeLeft: prevState.timeLeft - 1
      }));
    }
  }

  handleDecrementTimer = () => {
    this.intervalCode = setInterval(this.decrementTimer, 1000);
  }

  handleBrkLngthChange = (delta) => {
    this.setState((prevState, props) => ({
      breakLength: prevState.breakLength + delta
    }));
  }

  handleSessLngthChange = (delta) => {
    this.setState((prevState, props) => ({
      sessionLength: prevState.sessionLength + delta,
      timeLeft: prevState.timeLeft + delta
    }));
  }

  handleTimerStartStop = () => {
    let isRunning = null;
    if (this.state.timeRunning === true) {
      isRunning = false;
      clearInterval(this.intervalCode);
    } else {
      isRunning = true;
    }
    this.setState((prevState, props) => ({
      timeRunning: isRunning
    }));
    if (isRunning === true) {
      this.handleDecrementTimer();
    }
  }

  handleTimerResart = () => {
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    this.handleTimerStartStop();
    clearInterval(this.intervalCode);
    this.setState((prevState, props) => ({
      sessionLength: DEFAULT_START_TIME,
      breakLength: DEFAULT_BREAK,
      timeLeft: DEFAULT_START_TIME,
      sessionOrBreak: "Session",
      timeRunning: false
    }));
  }

  render() {
    return (
      <Container className="min-vh-100 justify-content-center align-items-center" id="main-container">
        <div className="rounded" id="clock-container">
          <Row className="justify-content-center" id="labels">
            <Col className="justify-content-center">
              <Break 
                breakLength={this.state.breakLength}
                numToString={this.formatAsString}
                timeRunning={this.state.timeRunning}
                onBrkLngthChange={this.handleBrkLngthChange}
              />
            </Col>
            <Col className="justify-content-center">
              <Session 
                sessionLength={this.state.sessionLength}
                numToString={this.formatAsString}
                timeRunning={this.state.timeRunning}
                onSessLngthChange={this.handleSessLngthChange}
              />
            </Col>
          </Row>
          <Row className="justify-content-center" id="timer-container">
            <Timer 
              timeLeft={this.state.timeLeft}
              sessionOrBreak={this.state.sessionOrBreak}
            />
          </Row>
          <Row className="justify-content-center" id="timer-controls-container">
            <TimerControls 
              timeRunning={this.state.timeRunning}
              timerStartStop={this.handleTimerStartStop}
              timerRestart={this.handleTimerResart}
            />
          </Row>
        </div>
        <audio id="beep" preload="auto" 
          src={this.state.audioURL}
          ref={(audio) => { this.audioBeep = audio; }} 

        />
      </Container>
    );
  }
}

export default App;
