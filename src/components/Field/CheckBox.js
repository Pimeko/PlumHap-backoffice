import React, { Component } from 'react'

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: false
    };
  }

  onChange = () => {
    let newVal = !this.state.val;
    this.setState({
      val: newVal
    });
    this.props.onChange(newVal);
  }

  render() {
    return (
      <div className="field">
        <div className="control has-text-centered">
          <label className="checkbox">
            <input type="checkbox" onChange={this.onChange}/>
             {this.props.name}
          </label>
        </div>
      </div>
    );
  };
}
