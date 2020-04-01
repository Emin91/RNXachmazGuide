import ExecutiveHeadScreen from '../../screens/executiveHead';
import ExecutiveScreen from '../../screens/executive';
import {createStackNavigator} from 'react-navigation-stack';

export const ExecutiveStackNav = createStackNavigator(
  {
    ExecutList: ExecutiveScreen,
    HeadOf: ExecutiveHeadScreen,
  },
  {
    initialRouteName: 'ExecutList',
    headerMode: 'none',
  },
);
