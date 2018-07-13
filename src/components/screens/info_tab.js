import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  textHeading: {
    fontSize: 16,
    padding: 10,
    fontWeight: '600'
  },
  listRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between'
  },
  keyText: {
    color: 'grey',
    fontSize: 14
  },
  valueText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600'
  }
});

class InfoTab extends Component {
  static navigationOptions = {
    tabBarLabel: 'Info',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source = { require('../../assets/icons8-info-30.png') }
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const { listRow, keyText, valueText, textHeading } = styles;

    return (
      <ScrollView>
        <View style = {{ flex: 1}}>
          <Text style = { textHeading }>General Information</Text>

          <View style = { listRow }>
            <Text style = { keyText }>Key</Text>
            <Text style = { valueText }>Value</Text>
          </View>

          <View style = { listRow }>
            <Text style = { keyText }>Key</Text>
            <Text style = { valueText }>Value</Text>
          </View>

          <View style = { listRow }>
            <Text style = { keyText }>Key</Text>
            <Text style = { valueText }>Value</Text>
          </View>

          <View style = { listRow }>
            <Text style = { keyText }>Key</Text>
            <Text style = { valueText }>Value</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export { InfoTab };
