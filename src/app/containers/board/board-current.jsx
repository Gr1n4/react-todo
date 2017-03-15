"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as boardAction from '../../actions/board.action';

class BoardCurrent extends Component {
  constructor({boards, match}) {
    super();
    this.board = boards.filter(item => item.id === match.params.id)[0];
    console.log('board', this.board);
    console.log('boards', boards);
    console.log(match);
  }

  render() {
    const {boards, actions} = this.props;
    const board = this.board
    console.log('board render', this.board);
    return (
      <div className="board-current">
        <h1>{board.title}</h1>
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
