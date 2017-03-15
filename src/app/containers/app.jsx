"use strict";

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.sass';

import Task from './task/task';
import Board from './board/board';
import List from './list/list';
import BoardCurrent from './board/board-current';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Board} />
        <Route path="/tasks" component={Task}/>
        <Route path="/lists" component={List}/>
        <Route path="/board/:id" component={BoardCurrent}/>
      </div>
    </Router>
  )
}

export default App;
