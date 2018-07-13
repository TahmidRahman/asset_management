import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { TabRoute } from '../../router';

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
    padding: 10,
    tintColor: 'black',
    backgroundColor: 'white'
  }
});

class AssetDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: state.params.title,
      subtitle: 'Asset Location',
      headerStyle: {
        backgroundColor: 'rgb(135,206,250)'
      },
      headerTintColor: 'white',
      headerRight: (
        <TouchableWithoutFeedback
          activeOpacity = { 1 }
          onPress={() => { }}>
          <Image
            style = { styles.headerImageStyle }
            source={require('../../assets/icons8-picture-64.png')}
          />
        </TouchableWithoutFeedback>
      )
    }
  }

  render() {
    return <TabRoute />;
  }
}

export { AssetDetails };
