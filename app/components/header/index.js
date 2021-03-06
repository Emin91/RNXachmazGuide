import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import icons from '../../constants/icons';

const HeaderComponent = ({navigation, title, iconName = icons.MENU_CITY}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <View style={styles.iconView}>
          <Image
            style={[
              styles.logo,
              {width: iconName == icons.MENU_CITY ? '50%' : '90%'},
            ]}
            resizeMode="contain"
            source={iconName}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.headerTitle}>{title}</Text>
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
