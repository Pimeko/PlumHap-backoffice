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

class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'activitie',
      field: null,
      hasFormError: true
    }
  }

  componentWillMount() {
    this.props.dispatch(fetcher.get_one(this.state.name, this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasUpdated || nextProps.hasDeleted) {
      browserHistory.push('/activities');
    }
  }

  update = () => {
    var toSend = {
      id: this.props.params.id,
      ...this.state.field
    };

    this.props.dispatch(fetcher.update_obj(this.state.name, toSend));
  }

  delete = () => {
    this.props.dispatch(fetcher.delete_obj(this.state.name, {
      id: this.props.params.id
    }));
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
            <ActivityField onChange={this.onFieldChange}
            hasFetched={ this.props.hasFetched } obj={ this.props.obj } />

            <button className="button is-info is-large has-addons is-centered"
              onClick={this.update} disabled={this.state.hasFormError}>
              Update
            </button>

            <button className="button is-danger is-large has-addons is-centered"
              onClick={this.delete}>
              Delete
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
    obj: activities.obj,
    hasFetched: activities.hasFetched,
    hasUpdated: activities.hasUpdated,
    hasDeleted: activities.hasDeleted
  }
}

export default connect(mapStateToProps)(Activity);
