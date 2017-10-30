import React, { Component } from 'react'

export default class Incrementor extends Component {
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
          <input className="input" type="text" placeholder="Message"
            value={this.state.val} onChange={this.onChange}
            autoFocus/>
        </div>
      </div>
    );
  };
}
