import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statements from '../actions/statements'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
//import StatementsList from '../components/StatementsList'
import Footer from '../components/Footer'

class Statements extends Component {
  componentWillMount() {
    this.props.dispatch(statements.get_statements());
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

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
