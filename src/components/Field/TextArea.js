import React, { Component } from 'react'

export default class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ''
    };
  }

  onChange = (event) => {
    let newVal = event.target.value;
    this.setState({
      nameValue: newVal
    });
    this.props.onChange(newVal);
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <label className="label">{this.props.name}</label>
          <textarea className="textarea" placeholder={this.props.name}
          onChange={this.onChange} autoFocus={this.props.autoFocus}>
          </textarea>
        </div>
      </div>
    );
  };
}
