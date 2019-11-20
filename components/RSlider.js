
import React, { Component, Fragment } from 'react';
import {
  Slider
} from 'react-native';


export default class extends Component {
  render() {
    return (
      <Fragment>
        {/* 
        minimumTrackTintColor 滑块左侧轨道的颜色
        maximumTrackTintColor 滑块右侧轨道的颜色
        step 滑块的步长 默认值为0
         */}
        <Slider step={0.2} minimumTrackTintColor="red" maximumTrackTintColor="pink"></Slider>
      </Fragment>
    )
  }
}