'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import EditTitle from '../common/edit-title';

export default class BoardItem extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove(e) {
    e.preventDefault();
    console.log('e -> ', e);
  }

  editTitle(value) {
    this.props.editTitle(this.props.board.id, value);
  }

  render() {
    const {board} = this.props
        , cardTitle = (
          <EditTitle defaultValue={board.title} onSubmit={this.editTitle.bind(this)} id={board.id} >
            <span>{board.title}</span>
          </EditTitle>
        )

    return (
      <Link to={`board/${board.id}`}>
        <Card>
          <CardHeader title={cardTitle} subtitle={board.description} />
          <CardActions>
            <FlatButton label="remove" onClick={this.handleRemove.bind(this)} />
          </CardActions>
        </Card>
      </Link>
    );
  }
}