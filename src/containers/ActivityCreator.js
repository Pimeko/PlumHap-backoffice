import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
import * as auth_utils from '../utils/auth'
import 'react-select/dist/react-select.css';

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import ActivityField from '../components/ActivityField'
import Footer from '../components/Common/Footer'

class ActivityCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'statement',
      field: null
    }
  }

  componentWillMount() {
    auth_utils.check_auth();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPosted) {
      browserHistory.push('/activities');
    }
  }

  create = () => {
    this.props.dispatch(fetcher.post_obj('activitie', {
      data: this.state.field}));
  }

  onFieldChange = (field) => {
    this.setState({field: field});
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="activities"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <ActivityField onChange={this.onFieldChange}/>

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
  const { activities } = state;

  return {
    hasPosted: activities.hasPosted
  }
}

export default connect(mapStateToProps)(ActivityCreator);
