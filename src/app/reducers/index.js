"use strict";

import {createStore} from 'redux';

import taskReducer from './task';

export default createStore(taskReducer);