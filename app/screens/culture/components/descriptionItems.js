import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';
import { colors } from '../../../constants/colors';

export const DescriptionItems = ({index, text}) => {
  console.log(index)
  return (
    <View style={[styles.info, {backgroundColor: index % 2 ? colors.ORANGE : colors.WHITE}]}>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};
