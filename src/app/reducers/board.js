"use strict";

import {BOARD_ADD} from '../constants/board';

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
    default:
      return state;
  }
}
