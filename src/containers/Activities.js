import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as activities from '../actions/activities'
import * as auth_utils from '../utils/auth'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import List from '../components/List'
import Adder from '../components/Adder'
import Footer from '../components/Footer'

class Activities extends Component {
  componentWillMount() {
    auth_utils.check_auth();
    this.props.dispatch(activities.get_activities());
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="activities"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <List titles={["Name", "Nb times", "Default"]} list={this.props.list} edit_address="activities"/>
            <Adder type='activity'/>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { activities } = state;

  return {
    list: activities.list
  }
}

export default connect(mapStateToProps)(Activities);
