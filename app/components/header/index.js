import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {titles} from '../../constants/strings';
import styles from './style';
import icons from '../../constants/icons';

const HeaderComponent = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <View style={styles.iconView}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={icons.SMALL_LOGO}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.headerTitle}>{titles.MAIN_TITLE}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.toggleDrawer()}
        style={styles.iconMenuView}>
        <Image
          style={styles.burgerIcon}
          resizeMode="contain"
          source={icons.BURGER_MENU}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
