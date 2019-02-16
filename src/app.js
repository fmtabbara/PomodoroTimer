import React from 'react';
import { PomodoroContainer } from './components/PomodoroContainer';
import ReactDOM from 'react-dom';

import './styles/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: 'default'
    };

    this.setBgColor = this.setBgColor.bind(this);
  }

  setBgColor(value) {
    let setBgColor;

    if (value === 1499) {
      setBgColor = 'pd';
    } else if (value === 599) {
      setBgColor = 'lb';
    } else if (value === 299) {
      setBgColor = 'sb';
    } else {
      setBgColor = 'default';
    }
    this.setState(() => ({
      background: setBgColor
    }));
  }

  render() {
    return (
      <div className={`app-container app-container--${this.state.background}`}>
        <PomodoroContainer setBgColor={this.setBgColor} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
