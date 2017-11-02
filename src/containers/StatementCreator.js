import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'

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
      field: null,
      hasFormError: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPosted) {
      browserHistory.push('/statements');
    }
  }

  onFieldChange = (newField) => {
    this.setState({
      field: newField.field,
      hasFormError: newField.error
    });
  }

  create = () => {
    this.props.dispatch(fetcher.post_obj(this.state.name, {
      data: this.state.field}));
  }

  changeTab = () => {
    this.props.dispatch(fetcher.clear_error(this.state.name));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements" changeTab={this.changeTab}/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <StatementField onChange={this.onFieldChange}/>

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
  const { statements } = state;

  return {
    hasPosted: statements.hasPosted
  }
}

export default connect(mapStateToProps)(StatementCreator);
