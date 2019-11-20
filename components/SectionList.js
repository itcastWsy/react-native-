
import React, { Component, Fragment } from 'react';
import {
  SectionList, Text, View
} from 'react-native';


export default class extends Component {
  render() {
    return (
      <Fragment>
        <View    style={{ height: 500, backgroundColor: "yellow" }}>
          <SectionList
            // 控制内容的渲染
            renderItem={({ item, index, section }) => <Text key={index}>--{item}--</Text>}
            // 控制标题的渲染
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: "bold" }}>||{title}||</Text>
            )}
         
            sections={[
              { title: "Title1", data: ["item1", "item2"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title3", data: ["item5", "item6"] }
            ]}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </Fragment>
    )
  }
}