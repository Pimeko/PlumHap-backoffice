import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as statements from '../actions/statements'
import { browserHistory } from 'react-router'
import * as auth_utils from '../utils/auth'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'
import InputField from '../components/InputField'
import Incrementor from '../components/Incrementor'
import Footer from '../components/Footer'

class ActivityCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: '',
      default: "true",
      nbTimes: 0
    }
  }

  componentWillMount() {
    auth_utils.check_auth();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPosted) {
      browserHistory.push('/activities');
    }
  }

  updateNameValue = (event) => {
    this.setState({
      nameValue: event.target.value
    });
  }

  create = () => {
    this.props.dispatch(statements.post_statement({data: this.state.nameValue}));
  }

  onDefaultChange = (val) => {
    this.setState({default: val});
  }

  onTimesChange = (val) => {
    this.setState({nbTimes: val});
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="activities"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <InputField name="Message" onChange={this.onDefaultChange}/>

            <div className="field">
              <div className="control">
                <label className="label">Default</label>
                <Select
                  value={this.state.default}
                  placeholder="Default"
                  options={[
                            { value: 'true', label: 'True' },
                            { value: 'false', label: 'False' }
                          ]}
                  onChange={this.onDefaultChange}
                  clearable={false}
                />
              </div>
            </div>

            <Incrementor name="Nb times" onChange={this.onTimesChange}/>

            <div>
              <button className="button is-info is-large has-addons is-centered"
                onClick={() => this.create()}>
                Create
              </button>
            </div>
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
    hasPosted: activities.hasPosted
  }
}

export default connect(mapStateToProps)(ActivityCreator);
