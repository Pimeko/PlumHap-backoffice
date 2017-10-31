import React, { Component } from 'react'

import Select from 'react-select';
import InputField from '../components/Field/InputField'
import TextArea from '../components/Field/TextArea'
import CheckBox from '../components/Field/CheckBox'
import Incrementor from '../components/Field/Incrementor'

export default class ActivityField extends Component {
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
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }/>

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
      </div>
    );
  };
}
