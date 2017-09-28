import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/searchbar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
