"use strict";

import taskReducer from './task';
import boardReducer from './board';
import listReducer from './list';

export default {
  task: taskReducer,
  board: boardReducer,
  list: listReducer
}