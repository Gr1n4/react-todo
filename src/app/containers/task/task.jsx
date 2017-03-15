"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as taskAction from '../../actions/task.action';

import TaskInput from '../../components/task-input';
import TaskList from '../../components/task-list';

class Task extends Component {
  addTask(taskInput, e) {
    e.preventDefault();
    this.props.actions.addTask(taskInput.value);
    taskInput.value = '';
  }

  render() {
    let {tasks, actions} = this.props;
    return (
      <div className="container">
        <h1>Task List</h1>
        <TaskInput addTask={this.addTask.bind(this)}/>
        <TaskList tasks={tasks} actions={actions}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.task
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(taskAction, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
