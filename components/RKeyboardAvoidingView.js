
import React, { Component, Fragment } from 'react';
import {
  KeyboardAvoidingView,
  TextInput, View, Text
} from 'react-native';


export default class extends Component {
  render() {
    return (
      <Fragment>
        <View style={{flex:1}}>
          <KeyboardAvoidingView style={{ backgroundColor: "yellow", flex: 1, justifyContent: "center" }}>
            <TextInput style={{ backgroundColor: "#ccc" }} ></TextInput>
          </KeyboardAvoidingView>
        </View>
      </Fragment>
    )
  }
}