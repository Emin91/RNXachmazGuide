import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style';

const ItemList = ({title, item, index}) => {
  return (
    <View
      style={[
        styles.linesViewRow,
        {
          backgroundColor: index ? '#f5c67f' : null,
        },
      ]}>
      <View style={styles.tableName}>
        <Text style={styles.tableNameTitle}>{title}</Text>
      </View>
      <View style={styles.tableDescription}>
        <Text
          style={[
            styles.tableDescriptionTitle,
            {fontSize: title == 'Məlumat:' ? 12 : 10},
          ]}>
          {item}
        </Text>
      </View>
    </View>
  );
};

export default ItemList;
