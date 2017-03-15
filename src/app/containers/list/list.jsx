"use strict";

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as listAction from '../../actions/list.action';

class List extends Component {

  render() {
    return (
      <h1>List</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(listAction, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
