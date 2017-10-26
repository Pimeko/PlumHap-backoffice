import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginValue: '',
      passwordValue: ''
    }

    this.updateLoginValue = this.updateLoginValue.bind(this);
    this.updatePasswordValue = this.updatePasswordValue.bind(this);
  }

  updateLoginValue (event) {
    this.setState({
      loginValue: event.target.value
    });
  }

  updatePasswordValue (event) {
    this.setState({
      passwordValue: event.target.value
    });
  }

  login() {
      this.props.login(this.state.loginValue, this.state.passwordValue);
  }

  handleEnterInput(event, _this) {
    if (event.key === 'Enter') {
      _this.login();
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.loginValue} onChange={this.updateLoginValue}
          onKeyPress={(event) => this.handleEnterInput(event, this)} placeholder="Pseudo" autoFocus/> <br/>
        <input type="text" value={this.state.passwordValue} onChange={this.updatePasswordValue}
          onKeyPress={(event) => this.handleEnterInput(event, this)} placeholder="Password" autoFocus/> <br/>
        <button onClick={() => this.login()}>Se connecter</button>
      </div>
    );
  }
}
