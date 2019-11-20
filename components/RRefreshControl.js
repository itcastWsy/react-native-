
import React, { Component, Fragment } from 'react';
import {
  ScrollView,
  RefreshControl,
  View,
  Text
} from 'react-native';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 3000);
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {Object.keys(String(Array(100))).map(v =>
          <View key={v}><Text>{v}</Text></View>
        )}
      </ScrollView >
    );
  }
}