import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/splash';
import mainStackNavigator from './stacks/mainStackNavigator';

export default SwitchNavigator = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen,
      MainApp: mainStackNavigator,
    },
    {
      initialRouteName: 'MainApp',
    },
  ),
);
