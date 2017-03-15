"use strict";

import {LIST_ADD} from '../constants/list';

const initialState = [];

export default function listReducer(state = initialState, {type, payload}) {
  switch (type) {
    case LIST_ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          boardId: payload.boardId,
          title: payload.title,
          description: '',
        }
      ];
      break;
    default:
      return state;
  }
}