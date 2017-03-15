"use strict";

import {LIST_ADD} from '../constants/list';

export const addList = title => {
  return {
    type: LIST_ADD,
    payload: {title}
  };
}