import ExecutiveHeadScreen from '../../screens/executiveHead';
import ExecutiveScreen from '../../screens/executive';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../../constants/colors';
import {titles} from '../../constants/strings';
import {myFonts} from '../../constants/fonts';

export const ExecutiveStackNav = createStackNavigator(
  {
    ExecutList: {
      screen: ExecutiveScreen,
      navigationOptions: {
        headerTitle: null,
        headerShown: false,
      },
    },
    HeadOf: {
      screen: ExecutiveHeadScreen,
      navigationOptions: {
        headerTitle: titles.MENU_EXECUTIVE,
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
  },
  {
    initialRouteName: 'ExecutList',
  },
);
