'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import * as boardAction from '../../actions/board.action';

import BoardList from '../../components/board/board-list';
import AddEntity from '../../components/common/add-entity';

class Board extends Component {
  addBoard(input) {
    if (!input || !input.length) {
      return;
    }
    this.props.actions.addBoard(input);
  }

  render() {
    const {boards, actions} = this.props;
    return (
      <div>
        <h1>Boards</h1>
        <AddEntity addTask={this.addBoard.bind(this)} />
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
