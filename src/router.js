import { createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator } from 'react-navigation';
import { HomeAssets, HistoryTab, InfoTab, AssetDetails, ServicesList, ErrorsList } from './components/screens/';
import { StyleSheet } from 'react-native';


export const TabRoute = createBottomTabNavigator({
  History: {
    screen: HistoryTab
  },
  More: {
    screen: InfoTab
  }
},{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor:'rgb(72,61,139)',
    showIcon:true,
    showLabel:true,
    iconStyle: {
      width: 20,
      height: 20,
    },
    style:{
      height:55,
      backgroundColor:'rgb(135,206,250)'
    },
    indicatorStyle:{
      backgroundColor:'transparent'
    }
  },
});

export const HistoryTabRoute = createMaterialTopTabNavigator({
  Services: {
    screen: ServicesList
  },
  Errors: {
    screen: ErrorsList
  }
}, {
  tabBarPosition: 'top',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'white',
    showIcon: true,
    activeBackgroundColor: 'rgb(135,206,250)',
    inactiveTintColor: 'rgb(135,206,250)',
    inactiveBackgroundColor: 'white',
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    style: {
      height: 55
    },
    tabStyle: {
      flexDirection: 'row'
    }
  }
});

export default StackRoute = createStackNavigator({
  HomeAssets: {
    screen: HomeAssets
  },
  AssetDetails: {
    screen: AssetDetails
  }
});
