import React, { Component } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import BookList from './containers/book_list';

class App extends Component {
    render() {
        return (
            <div>
            <BookList />
            </div>
            ); 
    }
}


export default App;


