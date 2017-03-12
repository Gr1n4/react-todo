"use strict";

import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import './assets/sass/index.sass';

import store from './app/reducers';
import App from './app/containers/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
