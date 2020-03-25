import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/main';
import DrawerMenuItems from '../screens/drawerMenu';
import HistoryScreen from '../screens/history';
import EducationScreen from '../screens/education';
import SportScreen from '../screens/sport';
import CultureScreen from '../screens/culture';
import EconomyScreen from '../screens/economy';
import MapScreen from '../screens/map';
import {createStackNavigator} from 'react-navigation-stack';
import {colors} from '../constants/colors';
import GeographyScreen from '../screens/geography';
import PhotosScreen from '../screens/photos';
import ExecutiveScreen from '../screens/executive';
import AboutAppScreen from '../screens/aboutApp';

const HistoryStackNav = createStackNavigator(
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

const DrawerMenu = createDrawerNavigator(
  {
    Main: MainScreen,
    History: HistoryStackNav,
    Education: EducationScreen,
    Sport: SportScreen,
    Culture: CultureScreen,
    Economy: EconomyScreen,
    Photos: PhotosScreen,
    Geography: GeographyScreen,
    Executive: ExecutiveScreen,
    AboutApp: AboutAppScreen,
  },
  {
    initialRouteName: 'Main',
    contentComponent: DrawerMenuItems,
  },
);

export default createAppContainer(DrawerMenu);
