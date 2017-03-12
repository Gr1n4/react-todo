"use strict";

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import * as taskAction from '../actions/task.action';

import './task-list.sass';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  editTask(editField, task, e) {
    e.stopPropagation();
    this[`${editField}InputValue`] = task[editField];
    this.props.editTask(editField, task.id);
  }

  setTitle(id, e) {
    e.preventDefault();
    if (this.titleInput.value && this.titleInput.value.length) {
      this.setState({hasError: false});
      this.props.setTitleTask(this.titleInput.value, id);
      this.props.editTask('title', id);
    } else {
      this.setState({hasError: true});
    }
  }

  setDescription(id, e) {
    e.preventDefault();
    this.props.setDescriptionTask(this.descriptionInput.value, id);
    this.props.editTask('description', id);
  }

  onEscape(field, task, e) {
    if (e.keyCode === 27) {
      this.props.editTask(field, task.id);
    }
  }

  render() {
    console.log('task list', this.props.tasks);
    let classes = classNames('input-group', {
      'has-error': this.state.hasError
    });
    return (
      <div className="row">
        <div className="task-list col-md-12">
          <ul>
            {this.props.tasks.map((item, index) =>
              <li key={index} className="panel panel-default">
                <div className="panel-heading">
                  {
                    item.edit.title ?
                    (
                      <form className={classes} onSubmit={this.setTitle.bind(this, item.id)}>
                        <input
                          className="form-control"
                          type="text"
                          ref={(e) => this.titleInput = e}
                          defaultValue={this.titleInputValue}
                          onKeyUp={this.onEscape.bind(this, 'title', item)}
                        />
                      </form>
                    ) :
                    (
                      <h3 className="panel-title" onClick={this.editTask.bind(this, 'title', item)}>
                        {item.title}
                      </h3>
                    )
                  }
                </div>
                <div className="panel-body">
                  {
                    item.edit.description ?
                    (
                      <form className="input-group" onSubmit={this.setDescription.bind(this, item.id)}>
                        <input
                          className="form-control"
                          type="text"
                          ref={(e) => this.descriptionInput = e}
                          defaultValue={this.descriptionInputValue}
                          onKeyUp={this.onEscape.bind(this, 'description', item)}
                        />
                      </form>
                    ) :
                    (
                      item.description && item.description.length ?
                        (
                          <p onClick={this.editTask.bind(this, 'description', item)}>
                            {item.description}
                          </p>
                        ) :
                        (
                          <i className="fa fa-plus" onClick={this.editTask.bind(this, 'description', item)}></i>
                        )
                    )
                  }
                </div>
              </li>
            )}
          </ul>
        </div>
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
    editTask: (editField, id) => {
      dispatch(taskAction.editTask(editField, id));
    },
    setTitleTask: (title, id) => {
      dispatch(taskAction.setTitleTask(title, id));
    },
    setDescriptionTask: (description, id) => {
      dispatch(taskAction.setDescriptionTask(description, id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
