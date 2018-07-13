import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import AssetListItem  from '../listItems/asset_list_item';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 14
  },
  headerRightContainerStyle: {
    flexDirection: 'row'
  },

  headerImageStyle: {
    height: 25,
    width: 25,
    margin: 10,
    tintColor: 'white'
  }
});

class HomeAssets extends Component {
  static navigationOptions = {
    title: 'Assets',
    headerStyle: {
      backgroundColor: 'rgb(135,206,250)'
    },
    headerTintColor: 'white',
    headerLeft: (
      <TouchableWithoutFeedback
        activeOpacity = { 1 }
        onPress={() => { }}>
        <Image
          style = { styles.headerImageStyle }
          source={require('../../assets/icons8-menu-filled-50.png')}
        />
      </TouchableWithoutFeedback>
    ),
    headerRight: (
      <View style = { styles.headerRightContainerStyle }>
        <TouchableWithoutFeedback
          activeOpacity = { 1 }
          onPress={() => { }}>
          <Image
            style = { styles.headerImageStyle }
            source={require('../../assets/icons8-search-filled-50.png')}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          activeOpacity = { 1 }
          onPress={() => { }}>
          <Image
            style = { styles.headerImageStyle }
            source={require('../../assets/icons8-filter-filled-50.png')}
          />
        </TouchableWithoutFeedback>
      </View>
    )
  };

  render() {
    const { container, text } = styles;
    return (
      <View style = { container }>
        <AssetListItem
          title = { 'Asset Name' }
          clientDetails = { 'Company Name' }
          serviceDescription = { 'Service Description' }
          assetDescription = { 'Subtitle' }
          {...this.props} />
      </View>
    );
  }
}


export { HomeAssets };
