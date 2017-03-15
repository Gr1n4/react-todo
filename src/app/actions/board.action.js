"use strict";

import {BOARD_ADD} from '../constants/board';

export const addBoard = title => {
  return {
    type: BOARD_ADD,
    payload: {title}
  };
}