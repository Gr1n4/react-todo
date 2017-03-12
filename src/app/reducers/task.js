"use strict";

import {TASK_ADD, TASK_EDIT, TASK_SET_DESCRIPTION, TASK_SET_TITLE, TASK_DELETE, TASK_COMPLETED} from '../constants/task';

const initialState = [
  {
    id: Date.now().toString(),
    title: 'task 1',
    description: 'task 1 description',
    completed: false,
  }
]

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload,
          description: '',
          completed: false,
        }
      ];
      break;
    case TASK_SET_DESCRIPTION:
      return state.map(item => item.id === action.payload.id ? {...item, description: action.payload.description} : item);
      break;
    case TASK_SET_TITLE:
      return state.map(item => item.id === action.payload.id ? {...item, title: action.payload.title} : item);
      break;
    case TASK_DELETE:
      return state.filter(item => item.id !== action.payload.id);
      break;
    case TASK_COMPLETED:
      return state.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item);
    default:
      return state
  }
}