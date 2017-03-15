"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as listAction from '../../actions/list.action';

import TaskInput from '../../components/task-input';
import ListItem from './list-item';

class List extends Component {

  addList(input, e) {
    e.preventDefault();
    this.props.actions.addList(input.value, this.props.boardId);
    input.value = '';
  }

  render() {
    const {lists, actions} = this.props;
    return (
      <div className="list">
        <TaskInput addTask={this.addList.bind(this)} />
        {
          lists.map((item, key) => {
            return (
              <ListItem
                list={item}
                key={key}
                {...actions}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(listAction, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
