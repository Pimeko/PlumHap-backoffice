import React, { Component } from 'react'

export default class StatementEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: ''
    }

    this.updateNameValue = this.updateNameValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasFetched) {
      this.setState({
        ...this.state,
        nameValue: nextProps.obj.data
      })
    }
  }

  updateNameValue (event) {
    this.setState({
      nameValue: event.target.value
    });
  }

  render() {
    return (
      <div className="hero-body column is-4 is-offset-4 has-text-centered">
        <div className="box">

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Message"
                value={this.state.nameValue} onChange={this.updateNameValue}
                autoFocus/>
            </div>
          </div>

          <button className="button is-info is-large has-addons is-centered"
            onClick={() => this.props.update(this.state.nameValue)}>
            Update
          </button>

          <button className="button is-danger is-large has-addons is-centered"
            onClick={() => this.props.delete()}>
            Delete
          </button>
        </div>
      </div>
    );
  };
}
