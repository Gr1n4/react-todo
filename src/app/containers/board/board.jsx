"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as boardAction from '../../actions/board.action';

import BoardList from '../../components/board-list';
import TaskInput from '../../components/task-input';

class Board extends Component {
  addBoard(input, e) {
    e.preventDefault();
    this.props.actions.addBoard(input.value);
    input.value = '';
  }

  render() {
    const {boards, actions} = this.props;
    console.log('boards', boards);
    return (
      <div>
        <h1>Boards</h1>
        <TaskInput addTask={this.addBoard.bind(this)} />
        <BoardList
          {...this.props}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.board
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(boardAction, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
