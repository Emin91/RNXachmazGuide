import React from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import styles from '../style';

const onItemPress = (navigation, index, nav) => {
  if (navigation.state.index !== index) {
    if (index !== 10) {
      navigation.navigate(nav);
    } else {
      BackHandler.exitApp();
    }
  } else {
    navigation.closeDrawer();
  }
};

const MenuItems = ({navigation, arrays}) => {
  return (
    <View>
      {arrays.map(({title, nav, index}) => {
        return (
          <TouchableOpacity
            style={styles.touchableItems}
            onPress={() => onItemPress(navigation, index, nav)}
            activeOpacity={0.6}
            key={title}>
            <Text
              style={
                index == navigation.state.index
                  ? styles.menuItemsTextSelected
                  : styles.menuItemsText
              }>
              {title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MenuItems;
