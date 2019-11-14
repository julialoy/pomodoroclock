import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';

const DEFAULT_START_TIME = 1500
const DEFAULT_BREAK = 300

class App extends Component {

  state = {
    sessionLength: DEFAULT_START_TIME,
    breakLength: DEFAULT_BREAK,
    timeLeft: DEFAULT_START_TIME,
    sessionOrBreak: "Session",
    timeRunning: true
  }

  formatAsString = (time) => {
    let minutes = Math.floor(time / 60).toString();
    return minutes;
  }

  handleBrkLngthChange = (delta) => {
    this.setState((prevState, props) => ({
      breakLength: prevState.breakLength + delta
    }));
  }

  handleSessLngthChange = (delta) => {
    this.setState((prevState, props) => ({
      sessionLength: prevState.sessionLength + delta
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
        </div>
      </Container>
    );
  }
}

export default App;
