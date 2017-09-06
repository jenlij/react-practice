import React, { Component } from 'react';

import Clock from './Clock.js';

class WorldClock extends Component {

  // Must include this if you want to hold `state`
  constructor(props) {
    super(props);

    this.state = props.clocks;
    this.state.timepiece = new Date();
    // debugger;
  }

  componentDidMount() {
    setInterval(() => {
      this._updateTimes();
    }, 1000);
  }

  render() {
    const myClocks = Object.keys(this.state.cities).map( (city, idx) => (
      <Clock
        name={city}
        time={this.state.timepiece}
        timeZone={this.state.cities[city].tz}
        key={idx}
        clickHandler={this._deleteClock}
      />
    ));

    return (
      <div>
        {/* <button onClick={this._updateTimes}>update!</button> */}
        {/* <Clock name="Atlanta!!!!!!" time={} /> */}
        {myClocks}
      </div>
    );
  }

  _updateTimes = () => {
      this.setState({
        timepiece: new Date()
      });
  }

  _deleteClock = (cityName) => {
    // console.log(cityName);

    // DO NOT EVER DO THIS.
    // NO REALLY, TIM.
    // DON.T DO IT.
    let copyOfCitites = this.state.cities; // DO NOT EVER DO THIS.
    delete copyOfCitites[cityName]; // DO NOT EVER DO THIS.
    // DO NOT EVER DO THIS.
    // NO REALLY, TIM.
    // DON.T DO IT.



    // console.log(copyOfCitites);
    // // console.log(this.state.cities)
    // const newCitiesArray = Object.keys(this.state.cities).map( (name) => {
    //   if (name !== cityName) {
    //     return name;
    //   }
    // });

    // const newNewCities = {};
    // newCitiesArray.forEach( (name) => {
    //   newNewCities[name] = this.state.cities[name];
    // });

    // this.setState({
    //   cities: newNewCities
    // });

  }

}

export default WorldClock;
