import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../constants/colors';

const menuItems = [
  {
    title: titles.MENU_MAIN,
    nav: 'Main',
  },
  {
    title: titles.MENU_HISTORY,
    nav: 'History',
  },
  {
    title: titles.MENU_EDUCATION,
    nav: 'Education',
  },
  {
    title: titles.MENU_SPORT,
    nav: 'History',
  },
  {
    title: titles.MENU_CULTURE,
    nav: 'History',
  },
  {
    title: titles.MENU_ECONOMY,
    nav: 'History',
  },
  {
    title: titles.MENU_PHOTOS,
    nav: 'History',
  },
  {
    title: titles.MENU_GEO,
    nav: 'History',
  },
];

const menuItemsTwo = [
  {
    title: titles.MENU_ABOUT_APP,
    nav: 'History',
  },
  {
    title: titles.MENU_EXIT,
    nav: 'History',
  },
];

const DrawerMenuItems = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image style={styles.img} source={images.IMG_2} />
      </View>
      <View style={styles.menuTitleView}>
        <Text style={styles.menuTitle}>{titles.MENU_TITLE}</Text>
      </View>
      <View style={styles.contentView}>
        {menuItems.map(({title, nav}) => {
          return (
            <TouchableOpacity
              style={{
                borderLeftWidth: 5,
                borderLeftColor:
                  title == titles.MENU_MAIN
                    ? colors.ORANGE
                    : colors.MAIN_CINDER,
              }}
              onPress={() => navigation.navigate(nav)}
              activeOpacity={0.6}
              key={title}>
              <Text style={styles.menuItems}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          flex: 0.17,
          paddingBottom: 7,
          justifyContent: 'flex-end',
        }}>
        {menuItemsTwo.map(({title, nav}) => {
          return (
            <TouchableOpacity activeOpacity={0.7} key={title}>
              <Text style={styles.menuItems}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DrawerMenuItems;
