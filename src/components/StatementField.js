import React, { Component } from 'react'

import InputField from '../components/Field/InputField'

export default class StatementField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }

  onChange = (val) => {
    this.setState({message: val}, () => {
    this.props.onChange(this.state);
    });
  }

  render() {
    return (
      <InputField name="Message" onChange={this.onChange} autoFocus
      hasFetched={ this.props.hasFetched } obj={ this.props.obj }
      objName="message"/>
    );
  };
}
