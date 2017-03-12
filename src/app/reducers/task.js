"use strict";

import {ADD_TASK} from '../constants/task';

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, {title: action.payload, id: Date.now().toString()}];
      break;
    default:
      return state
  }
}