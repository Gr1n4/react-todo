"use strict";

import React, {Component} from 'react';
import {connect} from 'react-redux';

import './task-list.sass';

class TaskList extends Component {
  render() {
    return (
      <div className="row">
        <div className="task-list col-md-12">
          <ul>
            {this.props.tasks.map((item, index) =>
              <li key={index} className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{item.title}</h3>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
