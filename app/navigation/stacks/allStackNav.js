import {createStackNavigator} from 'react-navigation-stack';
import AboutAuthorScreen from '../../screens/aboutDeveloper';
import AboutAppScreen from '../../screens/aboutApp';
import {colors} from '../../constants/colors';
import ExecutiveScreen from '../../screens/executive';
import ExecutiveHeadScreen from '../../screens/executiveHead';
import {titles} from '../../constants/strings';
import {myFonts} from '../../constants/fonts';
import HistoryScreen from '../../screens/history';
import MainScreen from '../../screens/main';
import MapScreen from '../../screens/map';

export const AllStackNav = createStackNavigator(
  {
    AboutAppScreen: {
      screen: AboutAppScreen,
      navigationOptions: {
        title: 'null',
        headerShown: false,
      },
    },
    AboutDeveloper: {
      screen: AboutAuthorScreen,
      navigationOptions: {
        title: null,
        headerTransparent: true,
        headerTintColor: colors.SUB_CLAY,
      },
    },
    ExecutList: {
      screen: ExecutiveScreen,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    HeadOf: {
      screen: ExecutiveHeadScreen,
      navigationOptions: {
        title: titles.MENU_EXECUTIVE,
        headerTintColor: colors.WHITE,
        headerTitleStyle: {
          fontFamily: myFonts.ULTIMA_PRO,
        },
        headerStyle: {
          backgroundColor: colors.SUB_CLAY,
          elevation: 0,
        },
      },
    },
    HistoryScreen: {
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
    initialRouteName: 'AboutAppScreen',
  },
);
