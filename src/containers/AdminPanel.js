import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import Footer from '../components/Common/Footer'

class AdminPanel extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Menu active="admin"/>

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth } = state;
  return {
    isLogged: auth.isLogged
  }
}

export default connect(mapStateToProps)(AdminPanel);
