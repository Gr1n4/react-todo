"use strict";

import {BOARD_ADD, BOARD_EDIT_TITLE} from '../constants/board';

const initialState = [
  {
    id: Date.now().toString(),
    title: 'board 1',
    description: '',
  }
];

export default function boardReducer(state = initialState, {type, payload}) {
  switch (type) {
    case BOARD_ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          description: '',
          ...payload
          // title: payload.title,
        }
      ];
    
    case BOARD_EDIT_TITLE:
      return state.map(item => item.id === payload.id ? {...item, title: payload.title} : item);
    default:
      return state;
  }
}
