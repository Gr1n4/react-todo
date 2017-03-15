"use strict";

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.sass';

import Task from './task/task';
import Board from './board/board';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Board} />
        <Route path="/tasks" component={Task}/>
      </div>
    </Router>
  )
}

export default App;
