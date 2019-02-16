import React from 'react';
import '../styles/button.css';

export const PomodoroView = ({
  now,
  placeHolderTime,
  reset,
  pomodoroCountDown,
  shortBreakCountDown,
  longBreakCountDown
}) => (
  <div className="App">
    <div>{now || placeHolderTime || '00:00'}</div>
    <div className="button-container">
      <button className="button button--pomodoro" onClick={pomodoroCountDown}>
        Pomodoro
      </button>
      <button className="button button--sb" onClick={shortBreakCountDown}>
        Short break
      </button>
      <button className="button button--lb" onClick={longBreakCountDown}>
        Long break
      </button>
      <button className="button button--reset" onClick={reset}>
        Reset
      </button>
    </div>
  </div>
);
