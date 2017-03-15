"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as boardAction from '../../actions/board.action';

import List from '../list/list';

class BoardCurrent extends Component {
  constructor({boards, match}) {
    super();
    this.board = boards.filter(item => item.id === match.params.id)[0];
  }

  render() {
    const {boards, actions, match} = this.props;
    const board = this.board
    return (
      <div className="board-current">
        <h1>{board.title}</h1>
        <List boardId={match.params.id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardCurrent);
