import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
class RView extends Component {
  render() {
    return (
      <View style={styles.view}></View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    height: 100,
    width: 100,
    backgroundColor: "aqua"
  }
})
export default RView;