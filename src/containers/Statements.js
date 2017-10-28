import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import * as auth_utils from '../utils/auth'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import List from '../components/List'
import Adder from '../components/Adder'
import Footer from '../components/Footer'

class Statements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'statement'
    }
  }

  componentWillMount() {
    auth_utils.check_auth();
    this.props.dispatch(fetcher.get_all(this.state.name));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <List titles={["Name"]} list={this.props.list} edit_address="statements"/>
            <Adder type='statement'/>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth, statements } = state;

  return {
    isLogged: auth.isLogged,
    list: statements.list
  }
}

export default connect(mapStateToProps)(Statements);
