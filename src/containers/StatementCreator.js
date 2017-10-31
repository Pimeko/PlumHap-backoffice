import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
import * as auth_utils from '../utils/auth'

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import StatementField from '../components/StatementField'
import Footer from '../components/Common/Footer'

class StatementCreator extends Component {
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
      browserHistory.push('/statements');
    }
  }

  onFieldChange = (field) => {
    this.setState({field: field});
  }

  create = () => {
    this.props.dispatch(fetcher.post_obj(this.state.name, {
      data: this.state.field}));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <StatementField onChange={this.onFieldChange}/>

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
  const { statements } = state;

  return {
    hasPosted: statements.hasPosted
  }
}

export default connect(mapStateToProps)(StatementCreator);
