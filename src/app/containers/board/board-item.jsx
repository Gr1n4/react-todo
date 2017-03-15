"use strict";

import React, {Component} from 'react';

import './board-item.sass';

export default class BoardItem extends Component {

  render() {
    const {board} = this.props;
    return (
      <div className="board-item">
        <div className="my-jumbotron">
          <h2>{board.title}</h2>
          <p>{board.description}</p>
        </div>
      </div>
    )
  }
}