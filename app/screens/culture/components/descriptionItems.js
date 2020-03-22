import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

export const DescriptionItems = ({text}) => {
  return (
    <View style={styles.info}>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};
