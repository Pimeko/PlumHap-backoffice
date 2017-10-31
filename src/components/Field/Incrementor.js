import React, { Component } from 'react'

export default class Incrementor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 0
    };
  }

  plus = () => {
    let newVal = this.state.val + 1
    this.setState({
      val: newVal
    });
    this.props.onChange(newVal);
  }

  minus = () => {
    let newVal = this.state.val - 1
    this.setState({
      val: newVal
    });
    this.props.onChange(newVal);
  }

  render() {
    return (

      <div className="field">
        <div className="control">
          <label className="label">{this.props.name}</label>

          <div className="has-text-centered">
            <button className="button is-small has-addons is-centered"
            disabled={this.state.val <= 0}
            onClick={this.minus}>
              -
            </button>
            { this.state.val }
            <button className="button is-small has-addons is-centered"
            disabled={this.state.val === 10}
            onClick={this.plus}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  };
}
