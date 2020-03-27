import {createStackNavigator} from 'react-navigation-stack';
import ExecutiveHeadScreen from '../../screens/executiveHead';
import ExecutiveScreen from '../../screens/executive';

export const ExecutiveStackNav = createStackNavigator(
  {
    Main: ExecutiveScreen,
    Head: ExecutiveHeadScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);
