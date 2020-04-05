import HistoryScreen from '../../screens/history';
import MapScreen from '../../screens/map';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../../constants/colors';
import {titles} from '../../constants/strings';

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
      navigationOptions: ({}) => ({
        title: titles.HISTORY_MAP_TITLE,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: colors.MAIN_CINDER,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
  },
  {
    initialRouteName: 'History',
  },
);
