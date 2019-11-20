/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';

import RView from "./components/RView";
import RActivityIndicator from "./components/RActivityIndicator";
import RButton from "./components/RButton";
import RFlatList from "./components/RFlatList";
import RKeyboardAvoidingView from "./components/RKeyboardAvoidingView";
import RModal from "./components/RModal";
import RPicker from "./components/RPicker";
import RRefreshControl from "./components/RRefreshControl";
import SectionList from "./components/SectionList";
import RSlider from "./components/RSlider";
import RStatusBar from "./components/RStatusBar";
import RSwitch from "./components/RSwitch";
import RText from "./components/RText";
import RTextInput from "./components/RTextInput";
import RTouchableHighlight from "./components/RTouchableHighlight";
import RTouchableOpacity from "./components/RTouchableOpacity";
import RWebView from "./components/RWebView";
 

export default class extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <RView></RView> */}
        {/* <RActivityIndicator></RActivityIndicator> */}
        {/* <RButton></RButton> */}
        {/* <RFlatList></RFlatList> */}
        {/* <RKeyboardAvoidingView></RKeyboardAvoidingView> */}
        {/* <RModal></RModal> */}
        {/* <RPicker></RPicker> */}
        {/* <RRefreshControl></RRefreshControl> */}
        {/* <SectionList></SectionList> */}
        {/* <RSlider></RSlider> */}
        {/* <RStatusBar></RStatusBar> */}
        {/* <RSwitch></RSwitch> */}
        {/* <RText></RText> */}
        {/* <RTextInput></RTextInput> */}
        {/* <RTouchableHighlight></RTouchableHighlight> */}
        {/* <RTouchableOpacity></RTouchableOpacity> */}
        <RWebView></RWebView>
      </View>
    )
  }
}