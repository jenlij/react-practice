// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reducers from "./reducers";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={ createStore(reducers) }>
    <App />
  </Provider>,
    document.getElementById("root")
);

registerServiceWorker();