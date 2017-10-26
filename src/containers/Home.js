import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

// Components
import Header from '../components/Header'
import Login from '../components/Login'
import Footer from '../components/Footer'

class Home extends Component {
  login(pseudo, password) {
    var user = { pseudo: pseudo, password: password };
    this.props.dispatch(login(user));
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="box">
          <h2>Connexion</h2>
          <Login login={(pseudo, password) => this.login(pseudo, password)}/>
        </div>
        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth } = state;

  return {
    authId: auth.userId
  }
}

export default connect(mapStateToProps)(Home);
