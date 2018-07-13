import React, { Component, PureComponent } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0
  },
  tabContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  tabBodySelected: {
    backgroundColor: 'rgb(135,206,250)',
    borderRadius: 5
  },
  tabBodyUnselected: {
    backgroundColor: 'white'
  },
  tabTextSelected: {
    color: 'white'
  },
  tabTextUnselected: {
    color: 'rgb(135,206,250)'
  }
});

class SingleTab extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { container, tabContainer, tabBodySelected,
      tabBodyUnselected, tabTextSelected, tabTextUnselected } = styles;

    const { selected, onPress, label } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress = { () => onPress }>
        <View style = { tabContainer }>
          <View style = { selected? tabBodySelected : tabBodyUnselected }>
            <Text style = { selected? tabTextSelected : tabTextUnselected }>
              { label }
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class CustomTabBar extends Component {
  render() {
    const { tabData } = this.props;
    const { container } = styles;

    return (
      <View style = { container }>
        <FlatList
          data = { tabData }
          numColumns = { 2 }
          contentContainerStyle = {{ flexDirection: 'row' }}
          keyExtractor = { ( item, index ) => index }
          renderItem = { ({ item }) => {
            <SingleTab
              label = { item.label }
              onPress = { item.onTabPressed }
              selected = { item.selected }
            />
          }}
          />
      </View>
    );
  }
}

export { CustomTabBar };
