
import React, { Component, Fragment } from 'react';

import WebView from "react-native-webview";


export default class extends Component {
  render() {
    return (
      <Fragment>
        <WebView source={{ uri: 'https://www.baidu.com' }}
          style={{ marginTop: 20 }}></WebView>
      </Fragment>
    )
  }
}