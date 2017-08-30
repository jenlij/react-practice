import React, { Component } from 'react';
import Cities from './config.js';

class Worldclock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTime: (new Date())
      }
      setInterval(() => {
        this._update(1000)
      }, 1000)
    }
    _update = (timeDifference) => {
      const newTime = new Date(this.state.currentTime.getTime() + timeDifference);
      this.setState({
        currentTime: newTime
      });
    }
    
    render() {
      const mycities = Object.keys(Cities).map((key) => 
        <div>
          <h2>{key}</h2>
          <h3>{((this.state.currentTime.getHours() + Cities[key]) % 24) + ":" + this.state.currentTime.getMinutes() + ":" + this.state.currentTime.getSeconds()}</h3>
        </div>
      )
      return (
        <div className="times">
          {mycities}
        </div>
      )
    }
}

export default Worldclock;

