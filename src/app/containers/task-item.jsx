"use strict";

import React, {Component} from 'react';
import classNames from 'classnames';

import './task-item.sass';

class TaskItem extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      edit: {
        title: false,
        description: false
      }
    };
  }

  editTask(editField, e) {
    e.stopPropagation();
    this[`${editField}InputValue`] = this.props.task[editField];
    this.setState({...this.state, edit: {...this.state.edit, [editField]: !this.state.edit[editField]}});
    setTimeout(() => {
      this[`${editField}Input`].focus();
    })
  }

  setTitle(e) {
    e.preventDefault();
    if (this.titleInput.value && this.titleInput.value.length) {
      this.props.setTitleTask(this.titleInput.value, this.props.task.id);
      this.setState({...this.state, hasError: false, edit: {...this.state.edit, title: false}})
    } else {
      this.setState({...this.state, hasError: true});
    }
  }

  setDescription(e) {
    e.preventDefault();
    this.props.setDescriptionTask(this.descriptionInput.value, this.props.task.id);
    this.setState({...this.state, edit: {...this.state.edit, description: false}})
  }

  onEscape(field, e) {
    if (e.keyCode === 27) {
      this.setState({...this.state, edit: {...this.state.edit, [field]: false}})
    }
  }

  deleteTask() {
    this.props.deleteTask(this.props.task.id);
  }

  completedTask() {
    this.props.completedTask(this.props.task.id);
  }

  render() {
    const {task} = this.props;
    let classes = {
      formTitle: classNames(
        'input-group',
        {
          'has-error': this.state.hasError
        }
      ),
      panel: classNames(
        'panel',
        {
          'panel-primary': !task.completed,
          'panel-success': task.completed
        }
      )
    };
    return (
      <div className="task-item">
        <div className="checkbox">
          <label htmlFor="">
            <input
              type="checkbox"
              checked={task.completed}
              onClick={this.completedTask.bind(this)}
            />
          </label>
        </div>
        <div className={classes.panel}>
          <i className="fa fa-trash fa-2x pull-right remove-icon" onClick={this.deleteTask.bind(this)}></i>
          <div className="panel-heading">
            {
              this.state.edit.title ?
                (
                  <form className={classes.formTitle} onSubmit={this.setTitle.bind(this)}>
                    <input
                      className="form-control"
                      type="text"
                      ref={(e) => this.titleInput = e}
                      defaultValue={this.titleInputValue}
                      onKeyUp={this.onEscape.bind(this, 'title')}
                    />
                  </form>
                ) :
                (
                  <h3 className="panel-title" onClick={this.editTask.bind(this, 'title')}>
                    {task.title}
                  </h3>
                )
            }
          </div>
          <div className="panel-body">
            {
              this.state.edit.description ?
                (
                  <form className="input-group" onSubmit={this.setDescription.bind(this)}>
                    <input
                      className="form-control"
                      type="text"
                      ref={(e) => this.descriptionInput = e}
                      defaultValue={this.descriptionInputValue}
                      onKeyUp={this.onEscape.bind(this, 'description')}
                    />
                  </form>
                ) :
                (
                  task.description && task.description.length ?
                    (
                      <p onClick={this.editTask.bind(this, 'description')}>
                        {task.description}
                      </p>
                    ) :
                    (
                      <i className="fa fa-plus" onClick={this.editTask.bind(this, 'description')}></i>
                    )
                )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TaskItem;
