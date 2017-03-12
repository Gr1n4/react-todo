"use strict";

import {ADD_TASK} from '../constants/task';

export const addTask = newTask => {
  return {
    type: ADD_TASK,
    payload: newTask
  }
}