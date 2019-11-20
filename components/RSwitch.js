
import React, { Component, Fragment } from 'react';
import {
  Switch
} from 'react-native';


export default class extends Component {
  state = {
    value: false
  }
  handleChange = () => {
    const { value } = this.state;
    this.setState({
      value: !value
    })
  }
  render() {
    return (
      <Fragment>
        <Switch thumbColor="yellow" tintColor="red" value={this.state.value}   onValueChange={this.handleChange}></Switch>
      </Fragment>
    )
  }
}