
import React, { Component, Fragment } from 'react';
import {
   TouchableOpacity ,Text
} from 'react-native';


export default class extends Component {
  _onPressButton=()=>{

  }
  render() {
    return (
      <Fragment>
        <TouchableOpacity underlayColor="yellow"  onPress={this._onPressButton}>
          <Text
            numberOfLines={3}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum non est nisi aut! Nesciunt illum beatae, consequuntur quo nulla dolorum voluptate libero? Ipsum necessitatibus beatae sit exercitationem omnis quos.</Text>
        </TouchableOpacity>
      </Fragment>
    )
  }
}