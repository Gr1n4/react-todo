'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class BoardItem extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove(e) {
    e.preventDefault();
    console.log('e -> ', e);
  }

  render() {
    const {board} = this.props;

    return (
      <Link to={`board/${board.id}`}>
        <Card>
          <CardHeader title={board.title} subtitle={board.description} />
          <CardActions>
            <FlatButton label="remove" onClick={this.handleRemove.bind(this)} />
          </CardActions>
        </Card>
      </Link>
    );
  }
}