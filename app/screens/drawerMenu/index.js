import React from 'react';
import {View, Text, Image} from 'react-native';
import {menuItemsListOne, menuItemsListTwo} from './components/menuItemsList';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';
import styles from './style';
import MenuItems from './components/mainItems';

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
        <MenuItems navigation={navigation} arrays={menuItemsListOne} />
      </View>
      <View style={styles.downView}>
        <MenuItems navigation={navigation} arrays={menuItemsListTwo} />
      </View>
    </View>
  );
};

export default DrawerMenuItems;
