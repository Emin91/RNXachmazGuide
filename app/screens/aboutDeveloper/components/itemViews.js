import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {blocks} from '../components/blocks';
import styles from '../style';
import onItemPress from '../components/onClick';

const ItemViews = () => {
  return (
    <View style={styles.infoView}>
      {blocks.map(({blockName, title, num}) => {
        return (
          <View key={num}>
            <Text style={styles.title}>{blockName}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => onItemPress(num)}>
              <Text style={styles.touchableTitle}>{title}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default ItemViews;
