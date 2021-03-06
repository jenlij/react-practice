import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from './BadAlien';
import Planet from './Planet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Planet name="Earth">
          <CrewMember name="Uhuru" rank="Commander" />
          <CrewMember name="Kirk" rank="Captain" />
          <BadAlien name="Khan" species="Genetically Modified Corn" />
        </Planet>
        <Spaceship
          name="Enterprise"
          commanderType="BadAlien"
          >
          <CrewMember name="Riker" rank="Commander" />
          <CrewMember name="Wesley Crusher" rank="Ensign" />
          <BadAlien name="Bjorn" species="Borg" />
        </Spaceship>
      </div>
    );
  }
}

export default App;
