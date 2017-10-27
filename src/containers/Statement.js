import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statements from '../actions/statements'
import * as auth_utils from '../utils/auth'
import { browserHistory } from 'react-router'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class Statement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: ''
    }

    this.updateNameValue = this.updateNameValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasUpdatedStatement) {
      browserHistory.push('/statements');
    }
    else if (nextProps.hasFetchedStatement) {
      this.setState({
        ...this.state,
        nameValue: nextProps.statement.data
      })
    }
  }

  updateNameValue (event) {
    this.setState({
      nameValue: event.target.value
    });
  }

  componentWillMount() {
    auth_utils.check_auth();
    this.props.dispatch(statements.get_statement(this.props.params.id));
  }

  update() {
    this.props.dispatch(statements.update_statement({
      id: this.props.params.id,
      data: this.state.nameValue
    }));
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
              onClick={() => this.update()}>
              Update
            </button>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth, statements } = state;
  /*if (!auth.isLogged) {
    browserHistory.push('/');
  }*/
  return {
    isLogged: auth.isLogged,
    statement: statements.statement,
    hasFetchedStatement: statements.hasFetchedStatement,
    hasUpdatedStatement: statements.hasUpdatedStatement
  }
}

export default connect(mapStateToProps)(Statement);
