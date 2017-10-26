import React, { Component } from 'react';

export default class StatementsList extends Component {

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
            this.props.list.map((statement) => {
              return <tr>
                  <th>{ statement.data }</th>
                  <td><button className="button">Edit</button></td>
                </tr>
            })
          }

        </tbody>
      </table>
    );
  }
}
