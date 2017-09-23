// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import reducers from "./reducers/reducer_books";

ReactDOM.render(
  <Provider store={ createStore(reducers) }>
    <App />
  </Provider>,
    document.getElementById("root")
);