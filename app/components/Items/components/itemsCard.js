import React from 'react';
import {View, Text} from 'react-native';
import {titles} from '../../../constants/strings';

const ItemsCard = ({color, num, text, count}) => {
  return (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        borderRadius: 4,
        marginBottom: 5,
        backgroundColor: color,
      }}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{num}</Text>
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
        }}>
        <Text>
          {text} {titles.POPULATION_PREFICS}
        </Text>
      </View>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>
          {count} {titles.PEOPLE_COUNT}
        </Text>
      </View>
    </View>
  );
};

export default ItemsCard;
