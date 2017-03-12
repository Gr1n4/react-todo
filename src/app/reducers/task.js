"use strict";

import {TASK_ADD, TASK_EDIT, TASK_SET_DESCRIPTION, TASK_SET_TITLE, TASK_DELETE, TASK_COMPLETED} from '../constants/task';

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case TASK_ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload,
          description: '',
          completed: false,
          edit: {
            title: false,
            description: false
          }
        }
      ];
      break;
    case TASK_EDIT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            edit: {
              ...item.edit,
              [action.payload.editField]: !item.edit[action.payload.editField]
            }
          }
        } else {
          return item;
        }
      });
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