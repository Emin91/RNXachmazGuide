import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/main';
import DrawerMenuItems from '../screens/drawerMenu';
import HistoryScreen from '../screens/history';
import EducationScreen from '../screens/education';
import SportScreen from '../screens/sport';
import CultureScreen from '../screens/culture';
import EconomyScreen from '../screens/economy';
import MapScreen from '../screens/map';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../constants/colors';
import GeographyScreen from '../screens/geography';

const StackNav = createStackNavigator(
  {
    History: {
      screen: HistoryScreen,
      navigationOptions: ({}) => ({
        title: null,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: colors.MAIN_CINDER,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    Map: {
      screen: MapScreen,
    },
  },
  {
    initialRouteName: 'History',
  },
);

const DrawerMenu = createDrawerNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    History: {
      screen: StackNav,
    },
    Education: {
      screen: EducationScreen,
    },
    Sport: {
      screen: SportScreen,
    },
    Culture: {
      screen: CultureScreen,
    },
    Economy: {
      screen: EconomyScreen,
    },
    Geography: {
      screen: GeographyScreen,
    },
  },
  {
    initialRouteName: 'Main',
    contentComponent: DrawerMenuItems,
  },
);

export default createAppContainer(DrawerMenu);
