
import React, { Component, Fragment } from 'react';
import {
  FlatList, Text
} from 'react-native';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <FlatList
          data={Object.keys(String(Array(200)))}
          /* 相当于keyExtractor  =  key */
          keyExtractor={item => item}
          renderItem={({ item }) => <Text >{item}</Text>}
        />
      </Fragment>
    )
  }
}