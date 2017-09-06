import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ZeInput from './ZeInput.js';
import ZeOutput from './ZeOutput.js';

import utils from './utils.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      label: 'magic form things',
      transformer: utils.upper
    };
  }

  render() {

    const options = Object.keys(utils).map((transformerName) => (
      <option value={transformerName}>{transformerName}</option>
    ));

    return (
      <div className="App">
        <h1>{this.state.label}</h1>

         <select onChange={this._changeTheTransformer}>
           {options}
        </select>

        <ZeInput
          text={this.state.text}
          changeHandler={this._updateText}
        />
        <ZeOutput
          text={this.state.text}
          transformText={this.state.transformer}
        />
      </div>
    );
  }

  _changeTheTransformer = (event) => {
    this.setState({
      transformer: utils[event.target.value]
    })
  }

  _updateText = (event) => {
    this.setState({
      text: event.target.value
    });
  }

}


export default App;


// const App = (props) => (
//   <div className="App">
//     <input type="text" />
//     <div>This will show a thing</div>
//   </div>
// );


// import WorldClock from './WorldClock';

// const firstClocks = {
//     cities: {
//       Atlanta: {
//         tz: 'America/New_York'
//       },
//       'New York': {
//         tz: 'America/New_York'
//       },
//       Tokyo: {
//         tz: 'Asia/Tokyo'
//       },
//   }
// };

// const secondClocks = {
//     cities: {
//       Manila: {
//         tz: 'Asia/Manila'
//       },
//       'Mexico City': {
//         tz: 'America/Mexico_City'
//       },
//       'Berlin': {
//         tz: 'Europe/Berlin'
//       },
//     }
// };
