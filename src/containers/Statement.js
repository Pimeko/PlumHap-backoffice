import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statements from '../actions/statements'
import * as auth_utils from '../utils/auth'
import { browserHistory } from 'react-router'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import StatementEditor from '../components/StatementEditor'
import Footer from '../components/Footer'

class Statement extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.hasUpdatedStatement || nextProps.hasDeletedStatement) {
      browserHistory.push('/statements');
    }

    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    auth_utils.check_auth();
    this.props.dispatch(statements.get_statement(this.props.params.id));
  }

  update(data) {
    this.props.dispatch(statements.update_statement({
      id: this.props.params.id,
      data: data
    }));
  }

  delete() {
    this.props.dispatch(statements.delete_statement({
      id: this.props.params.id
    }));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="statements"/>

        <StatementEditor hasFetchedStatement={ this.props.hasFetchedStatement }
          statement={ this.props.statement } update={ this.update }
          delete={ this.delete } />

        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { statements } = state;

  return {
    statement: statements.statement,
    hasFetchedStatement: statements.hasFetchedStatement,
    hasUpdatedStatement: statements.hasUpdatedStatement,
    hasDeletedStatement: statements.hasDeletedStatement
  }
}

export default connect(mapStateToProps)(Statement);
