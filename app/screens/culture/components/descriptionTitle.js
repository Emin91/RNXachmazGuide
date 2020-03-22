import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

export const DescriptionTitle = ({title}) => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
