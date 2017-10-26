import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statements from '../actions/statements'
import * as auth_utils from '../utils/auth'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import StatementsList from '../components/StatementsList'
import Footer from '../components/Footer'

class Statements extends Component {
  componentWillMount() {
    auth_utils.check_auth(this.props.route.connected);
    this.props.dispatch(statements.get_statements());
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <StatementsList list={this.props.list}/>
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
    list: statements.list
  }
}

export default connect(mapStateToProps)(Statements);