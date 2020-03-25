import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../style';

export const Buttons = ({navigation, itemsTitle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Head')}
      style={styles.itemView}>
      <Text style={styles.itemText}>{itemsTitle}</Text>
    </TouchableOpacity>
  );
};
