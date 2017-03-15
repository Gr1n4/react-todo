"use strict";

import {LIST_ADD} from '../constants/list';

const initialState = [
  {
    id: Date.now().toString(),
    title: 'task 1',
    description: 'task 1 description',
  }
];

export default function listReducer(state = initialState, {type, payload}) {
  switch (type) {
    case LIST_ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: payload.title,
          description: '',
        }
      ];
      break;
    default:
      return state;
  }
}