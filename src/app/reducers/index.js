"use strict";

// import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';

import taskReducer from './task';
import boardReducer from './board';

export default {
  task: taskReducer,
  board: boardReducer,
  // routing: routerReducer
}