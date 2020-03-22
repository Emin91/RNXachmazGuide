import React from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import styles from '../style';

const MenuItems = ({navigation, arrays}) => {
  return (
    <View>
      {arrays.map(({title, nav, index}) => {
        return (
          <TouchableOpacity
            style={styles.touchableItems}
            onPress={() =>
              index == 9 ? BackHandler.exitApp() : navigation.navigate(nav)
            }
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
