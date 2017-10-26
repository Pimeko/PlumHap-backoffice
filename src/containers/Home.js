import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { browserHistory } from 'react-router'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class Connect extends Component {
  login(pseudo, password) {
    var user = { pseudo: pseudo, password: password };
    this.props.dispatch(login(user));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogged) {
      browserHistory.push('/home');
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <div className="hero-body">
          <div className="column is-4 is-offset-4 has-text-centered">
            <div className="box">
              Connecté !
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth } = state;
  if (!auth.isLogged) {
    browserHistory.push('/');
  }
  return {
    isLogged: auth.isLogged,
    error: auth.error
  }
}

export default connect(mapStateToProps)(Connect);
