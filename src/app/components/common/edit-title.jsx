'use strict';

import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class EditTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      inputValue: props.defaultValue || ''
    };
  }

  onEscape(field, e) {
    if (e.keyCode === 27) {
      this.setState({isEdit: false});
    }
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({isEdit: !this.state.isEdit});
  }

  handleChange(e, inputValue) {
    this.setState({inputValue});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({isEdit: false});
  }

  render() {
    const {children} = this.props
        , childrenWithProps = React.Children.map(children, child => {
          return React.cloneElement(child, {onClick: this.handleEdit.bind(this)});
        });
    
    return (
      <div className="edit-title" >
        {
          this.state.isEdit ? 
            (
              <form onSubmit={this.handleSubmit.bind(this)} onClick={e => e.preventDefault()} >
                <TextField autoFocus={true} 
                           onChange={this.handleChange.bind(this)}
                           value={this.state.inputValue}
                           name={this.props.id}
                           onKeyUp={this.onEscape.bind(this, 'title')}
                />
              </form>
            ) : childrenWithProps
        }
      </div>
    );
  }
}