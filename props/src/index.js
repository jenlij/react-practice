import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { LOCATIONS } from './reducers';

import actions from './actions';

import starTrekApp from './reducers';
import { ships } from './reducers'
import { createStore } from 'redux';

const store = createStore(starTrekApp);

window.store = store;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
window.TRANSPORTER_ROOM = LOCATIONS.TRANSPORTER_ROOM;
window.PLANET_EARTH = LOCATIONS.PLANET_EARTH;
window.PLANET_SUN = LOCATIONS.PLANET_SUN;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
