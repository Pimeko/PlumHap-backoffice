import React, { Component } from 'react'

import InputField from '../components/Field/InputField'
import TextArea from '../components/Field/TextArea'
import CheckBox from '../components/Field/CheckBox'
import Incrementor from '../components/Field/Incrementor'
import DropDown from '../components/Field/DropDown'

export default class ActivityField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      level: "one",
      nb_times: 0,
      default: false
    }
  }

  onTitleChange = (val) => {
    this.setState({title: val}, this.onChange)
  }

  onDescriptionChange = (val) => {
    this.setState({description: val}, this.onChange)
  }

  onDefaultChange = (val) => {
    this.setState({default: val}, this.onChange);
  }

  onTimesChange = (val) => {
    this.setState({nbTimes: val}, this.onChange);
  }

  onLevelChange = (val) => {
    this.setState({level: val.value}, this.onChange);
  }

  onChange = () => {
    this.props.onChange(this.state);
  }

  render() {
    return (
      <div>
        <InputField name="Title" onChange={this.onTitleChange} autoFocus
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="title"/>

        <TextArea name="Description" onChange={this.onDescriptionChange}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="description"/>

        <DropDown name="Level" onChange={this.onLevelChange}
        options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' }
                ]}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="level"/>

        <Incrementor name="Nb times" onChange={this.onTimesChange}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="nb_times"/>

        <CheckBox name="Is default" onChange={this.onDefaultChange}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="default"/>
      </div>
    );
  };
}
