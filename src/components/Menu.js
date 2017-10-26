import React, { Component } from 'react';

export default class Menu extends Component {

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="dropdown navigation">
        <div className="navbar-item has-dropdown">
          <a className="navbar-link">
            Docs
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              Overview
            </a>
            <a className="navbar-item">
              Elements
            </a>
            <a className="navbar-item">
              Components
            </a>
            <hr className="navbar-divider"/>
            <div className="navbar-item">
              Version 0.6.0
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
