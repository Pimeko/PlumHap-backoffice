import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class StatementsList extends Component {
  goToEdit(id, e) {
    browserHistory.push('/statements/' + id);
  }

  render() {
    return (
      <table className="table has-text-centered">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.list.map((statement, i) => {
              return <tr key={i}>
                  <th>{ statement.data }</th>
                  <td>
                    <button className="button"
                      onClick={ this.goToEdit.bind(this, statement.id) }>
                      Edit
                    </button>
                  </td>
                </tr>
            })
          }

        </tbody>
      </table>
    );
  }
}
