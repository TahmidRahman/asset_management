import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { HistoryTabRoute } from '../../router';
import { CustomTabBar } from '../widgets/customTabBar';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 25,
    height: 25,
  }
});


class HistoryTab extends Component {
  constructor(props) {
    super(props);

    const { navigation } = props;

    const updateState = (index) => {
      let newTabData = Object.assign({}, this.state.tabData);
      newTabData.map( item => item.selected = false );
      newTabData[index].selected = true;
      this.setState({ tabData: newTabData });
    }

    this.state = { tabData: [
      {
        label: 'services',
        onTabPressed: () =>  {
          navigation.navigate('Services');
          updateState(0);
        },
        selected: true
      },
      {
        label: 'errors',
        onTabPressed: () => {
          navigation.navigate('Errors');
          updateState(1);
        },
        selected: false
      }]}
  }
  static navigationOptions = {
    tabBarLabel: 'Hisory',
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
      <View style = { styles.container }>
        <CustomTabBar tabData = { this.state.tabData }/>
        <HistoryTabRoute />
      </View>
    );
  }
}

export { HistoryTab };
