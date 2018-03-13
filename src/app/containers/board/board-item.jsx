"use strict";

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './board-item.sass';

/**
 * @deprecated
 */
export default class BoardItem extends Component {

  render() {
    const {board} = this.props;
    return (
      <div className="board-item">
        <div className="my-jumbotron">
          <h2>{board.title}</h2>
          <p>{board.description}</p>
          <button className="btn btn-primary">
            <Link to={`/board/${board.id}`} >Detail</Link>
          </button>
        </div>
      </div>
    )
  }
}