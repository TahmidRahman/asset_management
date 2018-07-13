import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ServiceTypeListItem extends PureComponent {
  render() {
    const { container, image, imageTextContainer, iconRight,
            textTitle, textNormal, textSubtitle } = styles;

    const { title, clientDetails, serviceDescription, date } = this.props;

    return (
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
            <Text style = { textSubtitle }>{ date }</Text>
          </View>
        </View>

        <Image
          source = { require('../../assets/icons8-high-priority-48.png') }
          style = { iconRight }
        />
      </View>
    );
  }
}

ServiceTypeListItem.propTypes = {
  title: PropTypes.string,
  clientDetails: PropTypes.string,
  serviceDescription: PropTypes.string,
  date: PropTypes.string
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
