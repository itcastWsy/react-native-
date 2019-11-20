
import React, { Component, Fragment } from 'react';
import {
  TextInput
} from 'react-native';


export default class extends Component {
  state = {
    value: "来快活呀"
  }
  handleChangeText=(e)=>{
    this.setState({value:e})
  }
  render() {
    return (
      <Fragment>
        <TextInput onChangeText={this.handleChangeText}  value={this.state.value} ></TextInput>
      </Fragment>
    )
  }
}