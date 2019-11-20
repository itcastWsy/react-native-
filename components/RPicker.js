
import React, { Component, Fragment } from 'react';
import {
  Picker
} from 'react-native';


export default class extends Component {
  state = {
    languages: [
      { label: "java", value: "java" },
      { label: "js", value: "js" },
      { label: "php", value: "php" },
      { label: "node", value: "node" }
    ],
    language: [
      { label: "java", value: "java" }
    ]
  }
  render() {
    return (
      <Fragment>
        <Picker
          selectedValue={this.state.language}
          style={{ width: 300 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          {this.state.languages.map(v =>
            <Picker.Item key={v.label} {...v} />
          )}

        </Picker>
      </Fragment>
    )
  }
}