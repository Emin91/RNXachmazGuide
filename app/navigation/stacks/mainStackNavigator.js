import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../../constants/colors';
import DrawerMenu from '../drawer';
import HistoryScreen from '../../screens/history';

const AppContainer = createStackNavigator(
  {
    MainScreen: {
      screen: DrawerMenu,
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
  },
  {
    initialRouteName: 'MainScreen',
  },
);

export default createAppContainer(AppContainer);
