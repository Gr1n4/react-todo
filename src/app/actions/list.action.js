"use strict";

import {LIST_ADD} from '../constants/list';

export const addList = (title, boardId) => {
  return {
    type: LIST_ADD,
    payload: {title, boardId}
  };
}