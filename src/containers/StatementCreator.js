import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statements from '../actions/statements'
import { browserHistory } from 'react-router'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class StatementCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: ''
    }

    this.updateNameValue = this.updateNameValue.bind(this);
    this.create = this.create.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPostedStatement) {
      browserHistory.push('/statements');
    }
  }

  updateNameValue (event) {
    this.setState({
      nameValue: event.target.value
    });
  }

  create() {
    this.props.dispatch(statements.post_statement({data: this.state.nameValue}));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

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
              onClick={() => this.create()}>
              Create
            </button>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { statements } = state;

  return {
    hasPostedStatement: statements.hasPostedStatement
  }
}

export default connect(mapStateToProps)(StatementCreator);
