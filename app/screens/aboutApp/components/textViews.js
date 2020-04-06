import React from 'react';
import {View, Text} from 'react-native';

export const TextViews = ({viewStyle, textStyle, text}) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};
