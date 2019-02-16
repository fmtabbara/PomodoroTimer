import React from 'react';
import { PomodoroView } from './PomodoroView';

let newInterval;

export class PomodoroContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      now: undefined,
      placeHolderTime: undefined
    };
  }

  pomodoroCountDown(value) {
    //Set up timer function
    let placeHolderTime;

    if (value === 1499) {
      placeHolderTime = '25:00';
    } else if (value === 599) {
      placeHolderTime = '10:00';
    } else {
      placeHolderTime = '05:00';
    }

    this.setState(() => ({ placeHolderTime }));

    this.props.setBgColor(value);

    const timer = () => {
      if (this.state.timer !== -1) {
        this.setState(prevState => ({
          timer: prevState.timer - 1,
          //return minutes and seconds
          //if minute or seconds < 10 append '0'
          now: `${
            Math.floor(this.state.timer / 60) >= 10
              ? Math.floor(this.state.timer / 60)
              : '0' + Math.floor(this.state.timer / 60)
          }:${
            this.state.timer % 60 >= 10
              ? this.state.timer % 60
              : '0' + (this.state.timer % 60)
          }`
        }));
      }
    };
    this.setInterval(timer, value);
  }

  setInterval(timer, value, reset = null) {
    clearInterval(newInterval);
    this.setState(() => ({
      timer: value,
      now: undefined
    }));

    newInterval = setInterval(timer, 1000);

    if (reset) {
      clearInterval(newInterval);
      this.setState(() => ({
        timer: 0,
        now: undefined,
        placeHolderTime: undefined
      }));
      this.props.setBgColor('default');
    }
  }

  render() {
    return (
      <PomodoroView
        now={this.state.now}
        placeHolderTime={this.state.placeHolderTime}
        reset={() => this.setInterval(null, null, true)}
        pomodoroCountDown={() => this.pomodoroCountDown(1499)}
        shortBreakCountDown={() => this.pomodoroCountDown(299)}
        longBreakCountDown={() => this.pomodoroCountDown(599)}
      />
    );
  }
}
