import React, { Component } from 'react'

export default class Incrementor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.hasFetched && nextProps.hasFetched) {
      this.setState({
        val: nextProps.obj[this.props.objName]
      }, () => {
        this.props.onChange(this.state.val);
      })
    }
  }

  onChange = (event) => {
    this.setState({
      val: event.target.value
    }, () => {
      this.props.onChange(this.state.val);
    });
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <label className="label">{this.props.name}</label>
          <input className="input" type="text" placeholder={this.props.name}
            value={this.state.val} onChange={this.onChange}
            autoFocus={this.props.autoFocus}/>
        </div>
      </div>
    );
  };
}
