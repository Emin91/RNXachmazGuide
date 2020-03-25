import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/main';
import DrawerMenuItems from '../screens/drawerMenu';
import EducationScreen from '../screens/education';
import SportScreen from '../screens/sport';
import CultureScreen from '../screens/culture';
import EconomyScreen from '../screens/economy';
import GeographyScreen from '../screens/geography';
import PhotosScreen from '../screens/photos';
import AboutAppScreen from '../screens/aboutApp';
import {HistoryStackNav} from './stacks/historyStackNav';
import {ExecutiveStackNav} from './stacks/executiveStackNav';

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
    Executive: ExecutiveStackNav,
    AboutApp: AboutAppScreen,
  },
  {
    initialRouteName: 'Main',
    contentComponent: DrawerMenuItems,
  },
);

export default createAppContainer(DrawerMenu);
