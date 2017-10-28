import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class StatementAdder extends Component {
  add() {
    browserHistory.push('/statement-creator');
  }

  render() {
    return (
      <button className="button is-info is-large has-addons is-centered"
        onClick={() => this.add()}>
        +
      </button>
    );
  };
}
