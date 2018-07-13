import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
});

class ErrorsList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Errors List',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source = { require('../../assets/icons8-time-machine-26.png') }
        style = { [ styles.icon, {tintColor: tintColor} ] }
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Services List</Text>
      </View>
    )
  }
}

export { ErrorsList };
