import React, { Component } from 'react';
import './App.css';

import Worldclock from './Worldclock.js';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <h1>World Clock</h1>
        </div>
        <Worldclock/>
      </div>
    );
  }
}





export default App;
