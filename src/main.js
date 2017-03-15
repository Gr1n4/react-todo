"use strict";

import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './assets/sass/index.sass';

import reducers from './app/reducers';
import App from './app/containers/app';

let store = createStore(
  combineReducers({
    ...reducers
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
