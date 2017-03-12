"use strict";

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as taskAction from '../actions/task.action';

import './app.sass';

import TaskInput from '../components/task-input';
import TaskList from '../components/task-list';

class App extends React.Component {
  addTask(taskInput, e) {
    e.preventDefault();
    this.props.actions.addTask(taskInput.value);
    taskInput.value = '';
  }

  render() {
    return (
      <div className="container">
        <h1>Task List</h1>
        <TaskInput addTask={this.addTask.bind(this)}/>
        <TaskList tasks={this.props.tasks} actions={this.props.actions}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(taskAction, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
