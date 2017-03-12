"use strict";

import React from 'react';
import {connect} from 'react-redux';

import * as taskAction from '../actions/task.action';

import './app.sass';

import TaskInput from '../components/task-input';
import TaskList from '../containers/task-list';

class App extends React.Component {
  addTask(taskInput, e) {
    e.preventDefault();
    this.props.addTask(taskInput.value);
    taskInput.value = '';
  }

  render() {
    console.log(this.props.todos);
    return (
      <div className="container">
        <h1>Task List</h1>
        <TaskInput addTask={this.addTask.bind(this)}/>
        <TaskList/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: newTask => {
      dispatch(taskAction.addTask(newTask));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
