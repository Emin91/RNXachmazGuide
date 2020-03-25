import {createStackNavigator} from 'react-navigation-stack';
import ExecutiveHeadScreen from '../../screens/executiveHead';
import ExecutiveScreen from '../../screens/executive';

export const ExecutiveStackNav = createStackNavigator(
  {
    Main: {
      screen: ExecutiveScreen,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    Head: {
      screen: ExecutiveHeadScreen,
      navigationOptions: {
        title: null,
        headerTransparent: true,
      },
    },
  },
  {
    initialRouteName: 'Main',
  },
);
