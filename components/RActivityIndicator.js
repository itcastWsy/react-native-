
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator
} from 'react-native';


export default class extends Component {
  render() {
    return (
      <Fragment>
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
      </Fragment>
    )
  }
}