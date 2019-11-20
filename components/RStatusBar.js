
import React, { Component, Fragment } from 'react';
import {
  StatusBar
} from 'react-native';


export default class extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="aqua" barStyle="light-content" />
      </Fragment>
    )
  }
}