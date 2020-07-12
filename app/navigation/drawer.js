import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/main';
import DrawerMenuItems from '../screens/drawerMenu';
import EducationScreen from '../screens/education';
import SportScreen from '../screens/sport';
import CultureScreen from '../screens/culture';
import EconomyScreen from '../screens/economy';
import GeographyScreen from '../screens/geography';
import {HistoryStackNav} from './stacks/historyStackNav';
import PhotosScreen from '../screens/photos';
import {AboutStackNav} from './stacks/aboutStackNav';
import ExecutiveHeadScreen from '../screens/executiveHead';
// import NewsScreen from '../screens/ne';

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
    Head: ExecutiveHeadScreen,
    About: AboutStackNav,
  },
  {
    initialRouteName: 'Main',
    contentComponent: DrawerMenuItems,
  },
);

export default createAppContainer(DrawerMenu);
