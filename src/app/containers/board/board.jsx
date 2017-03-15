"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as boardAction from '../../actions/board.action';

class Board extends Component {

  render() {
    console.log(this.props.boards);
    return (
      <h1>Boards</h1>
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
