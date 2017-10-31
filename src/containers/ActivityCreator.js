import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
import * as auth_utils from '../utils/auth'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import InputField from '../components/Field/InputField'
import TextArea from '../components/Field/TextArea'
import CheckBox from '../components/Field/CheckBox'
import Incrementor from '../components/Field/Incrementor'
import Footer from '../components/Common/Footer'

class ActivityCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      level: "one",
      nbTimes: 0,
      default: false
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

  create = () => {
    this.props.dispatch(fetcher.post_obj('activitie', {data: this.state.nameValue}));
  }

  onTitleChange = (val) => {
    this.setState({title: val})
  }

  onDescriptionChange = (val) => {
    this.setState({description: val})
  }

  onDefaultChange = (val) => {
    this.setState({default: val});
  }

  onTimesChange = (val) => {
    this.setState({nbTimes: val});
  }

  onLevelChange = (val) => {
    this.setState({level: val.value});
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active="activities"/>

        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <InputField name="Title" onChange={this.onTitleChange} autoFocus/>

            <TextArea name="Description" onChange={this.onDescriptionChange}/>

            <div className="field">
              <div className="control">
                <label className="label">Level</label>
                <Select
                  value={this.state.level}
                  placeholder="Level"
                  options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' }
                          ]}
                  onChange={this.onLevelChange}
                  clearable={false}
                />
              </div>
            </div>

            <Incrementor name="Nb times" onChange={this.onTimesChange}/>

            <CheckBox name="Is default" onChange={this.onDefaultChange}/>

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
