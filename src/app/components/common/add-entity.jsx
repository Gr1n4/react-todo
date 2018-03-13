'use strict';

import React, {Component} from 'react';
import {TextField, RaisedButton} from 'material-ui';

class AddEntity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  handleChanges(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.inputValue, e);
    this.setState({inputValue: ''});
  }

  render() {
    const {addTask, label} = this.props;
    return (
      <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
        <TextField type="text" 
                   floatingLabelText={label || 'Board title'}
                   hintText="Please write board title"
                   onChange={this.handleChanges.bind(this)} 
                   value={this.state.inputValue}/>
        <RaisedButton type="submit" label="Add" primary={true} />
      </form>
    );
  }

}

export default AddEntity;
