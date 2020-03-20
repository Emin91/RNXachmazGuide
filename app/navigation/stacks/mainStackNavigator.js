import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../../screens/main';
import {colors} from '../../constants/colors';

const AppContainer = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
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
    //headerMode: 'none',
    initialRouteName: 'MainScreen',
  },
);

export default createAppContainer(AppContainer);
