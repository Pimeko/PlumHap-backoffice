import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import * as auth_utils from '../utils/auth'
import { browserHistory } from 'react-router'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import StatementEditor from '../components/StatementEditor'
import Footer from '../components/Footer'

class Statement extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.hasUpdated || nextProps.hasDeleted) {
      browserHistory.push('/statements');
    }

    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    auth_utils.check_auth();
    this.props.dispatch(fetcher.get_one('statement', this.props.params.id));
  }

  update(data) {
    this.props.dispatch(fetcher.update_obj('statement', {
      id: this.props.params.id,
      data: data
    }));
  }

  delete() {
    this.props.dispatch(fetcher.delete_obj('statement', {
      id: this.props.params.id
    }));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

        <StatementEditor hasFetched={ this.props.hasFetched }
          obj={ this.props.obj } update={ this.update }
          delete={ this.delete } />

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { statements } = state;

  return {
    obj: statements.obj,
    hasFetched: statements.hasFetched,
    hasUpdated: statements.hasUpdated,
    hasDeleted: statements.hasDeleted
  }
}

export default connect(mapStateToProps)(Statement);
