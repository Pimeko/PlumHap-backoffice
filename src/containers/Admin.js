import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import ErrorDisplayer from '../components/Common/ErrorDisplayer'
import AdminField from '../components/AdminField'
import Footer from '../components/Common/Footer'

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'user',
      field: null,
      hasFormError: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasUpdated) {
      this.props.dispatch(fetcher.clear(this.state.name));
      browserHistory.push('/admin');
    }
  }

  update = () => {
    var toSend = {
      id: localStorage.getItem('id'),
      ...this.state.field
    };

    this.props.dispatch(fetcher.update_obj(this.state.name, toSend));
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

        <Menu active="admin" changeTab={this.changeTab}/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <ErrorDisplayer message={this.props.error.error}/>
            <AdminField onChange={this.onFieldChange}
            hasFetched={ this.props.hasFetched } obj={ this.props.obj }/>

            <button className="button is-info is-large has-addons is-centered"
              onClick={this.update} disabled={this.state.hasFormError}>
              Update
            </button>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { user } = state;

  return {
    error: user.error,
    hasUpdated: user.hasUpdated
  }
}

export default connect(mapStateToProps)(Admin);
