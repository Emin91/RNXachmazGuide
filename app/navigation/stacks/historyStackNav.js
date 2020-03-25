import HistoryScreen from '../../screens/history';
import MapScreen from '../../screens/map';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../../constants/colors';

export const HistoryStackNav = createStackNavigator(
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
