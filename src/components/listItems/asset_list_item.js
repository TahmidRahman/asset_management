import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

export default class AssetListItem extends PureComponent {
  render() {
    const { container, image, imageTextContainer, iconRight,
            textTitle, textNormal, textSubtitle } = styles;

    const { title, clientDetails, serviceDescription, assetDescription, navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress = { () => navigation.navigate('AssetDetails', { title: title }) }>
        <View style = { container }>
          <View style = { imageTextContainer }>
            <Image
              source = { require('../../assets/icons8-picture-64.png') }
              style = { image }
            />
            <View>
              <Text style = { textTitle }>{ title }</Text>
              <Text style = { textNormal }>{ clientDetails }</Text>
              <Text style = { textNormal }>{ serviceDescription }</Text>
              <Text style = { textSubtitle }>{ assetDescription }</Text>
            </View>
          </View>

          <Image
            source = { require('../../assets/icons8-high-priority-48.png') }
            style = { iconRight }
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

AssetListItem.propTypes = {
  title: PropTypes.string,
  clientDetails: PropTypes.string,
  serviceDescription: PropTypes.string,
  assetDescription: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageTextContainer: {
    flexDirection: 'row'
  },
  image: {
    height: 80,
    width: 80,
    marginRight: 10,
    backgroundColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  iconRight: {
    height: 25,
    width: 25,
    alignSelf: 'center'
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black'
  },
  textNormal: {
    fontSize: 14,
    color: 'grey'
  },
  textSubtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: 'grey'
  }
});
