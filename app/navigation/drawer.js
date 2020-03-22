import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/main';
import DrawerMenuItems from '../screens/drawerMenu';
import HistoryScreen from '../screens/history';
import EducationScreen from '../screens/education';
import SportScreen from '../screens/sport';
import CultureScreen from '../screens/culture';

const DrawerMenu = createDrawerNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    History: {
      screen: HistoryScreen,
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
  },
  {
    initialRouteName: 'Main',
    contentComponent: DrawerMenuItems,
  },
);

export default createAppContainer(DrawerMenu);
