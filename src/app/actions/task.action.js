"use strict";

import {TASK_ADD, TASK_EDIT, TASK_SET_TITLE, TASK_SET_DESCRIPTION, TASK_DELETE, TASK_COMPLETED} from '../constants/task';

export const addTask = newTask => {
  return {
    type: TASK_ADD,
    payload: newTask
  }
}

export const editTask = (editField, id) => {
  return {
    type: TASK_EDIT,
    payload: {editField, id}
  }
}

export const setTitleTask = (title, id) => {
  return {
    type: TASK_SET_TITLE,
    payload: {title, id}
  }
}

export const setDescriptionTask = (description, id) => {
  return {
    type: TASK_SET_DESCRIPTION,
    payload: {description, id}
  }
}

export const deleteTask = (id) => {
  return {
    type: TASK_DELETE,
    payload: {id}
  }
}

export const completedTask = (id) => {
  return {
    type: TASK_COMPLETED,
    payload: {id}
  }
}
