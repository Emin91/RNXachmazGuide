import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../../constants/colors';
import AboutAppScreen from '../../screens/aboutApp';
import AboutAuthorScreen from '../../screens/aboutDeveloper';

export const AboutStackNav = createStackNavigator(
  {
    AboutApp: {
      screen: AboutAppScreen,
      navigationOptions: {
        title: null,
        headerShown: false,
      },
    },
    AboutDeveloper: {
      screen: AboutAuthorScreen,
      navigationOptions: {
        title: null,
        headerTransparent: true,
        headerTintColor: colors.WHITE,
      },
    },
  },
  {
    initialRouteName: 'AboutApp',
  },
);
