"use strict";

import {BOARD_ADD} from '../constants/board';

const initialState = [
  {
    id: Date.now().toString(),
    title: 'board 1',
    description: '',
  }
];

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case BOARD_ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload.title,
          description: '',
        }
      ];
      break;
    default:
      return state;
  }
}
