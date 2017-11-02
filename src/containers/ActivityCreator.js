import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
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
      field: null,
      hasFormError: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPosted) {
      browserHistory.push('/activities');
    }
  }

  create = () => {
    var toSend = {
      ...this.state.field
    };

    this.props.dispatch(fetcher.post_obj('activitie', toSend));
  }

  onFieldChange = (newField) => {
    this.setState({
      field: newField.field,
      hasFormError: newField.error
    });
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
            <ActivityField onChange={this.onFieldChange}/>

            <button className="button is-info is-large has-addons is-centered"
              onClick={() => this.create()} disabled={this.state.hasFormError}>
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
