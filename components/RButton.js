
import React, { Component, Fragment } from 'react';
import {
  Button
} from 'react-native';


export default class extends Component {
  render() {
    return (
      <Fragment>
        <Button title="按钮" ></Button>
        <Button title="按钮" color="#841584" ></Button>
        <Button title="按钮" color="red" ></Button>
      </Fragment>
    )
  }
}