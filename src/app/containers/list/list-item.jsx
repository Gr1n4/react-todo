"use strict";

import React, {Component} from 'react';

export default class ListItem extends Component {

  render() {
    const {list, actions} = this.props;
    return (
      <div className="list-item">
        <h1>{list.title}</h1>
      </div>
    )
  }
}