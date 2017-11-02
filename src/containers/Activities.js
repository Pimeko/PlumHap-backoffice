import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import List from '../components/List'
import Adder from '../components/Adder'
import Footer from '../components/Common/Footer'

class Activities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'activitie'
    }
  }

  componentWillMount() {
    this.props.dispatch(fetcher.get_all(this.state.name));
  }

  changeTab = () => {
    this.props.dispatch(fetcher.clear_error(this.state.name));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="activities" changeTab={this.changeTab}/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <List titles={["Title", "Nb Times", "Level", "Default"]}
            exclude={["description"]}
            list={this.props.list} edit_address="activities"/>
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
