"use strict";

import {BOARD_ADD, BOARD_EDIT_TITLE} from '../constants/board';

export const addBoard = title => {
  return {
    type: BOARD_ADD,
    payload: {title}
  };
}

export const editTitle = (id, title) => {
  return {
    type: BOARD_EDIT_TITLE,
    payload: {id, title}
  }
}