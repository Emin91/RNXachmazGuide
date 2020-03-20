import React from 'react';
import {View, Text} from 'react-native';
import {listArray} from './components/itemArray';
import styles from './style';
import ItemsCard from './components/itemsCard';

const ItemsCardComponent = ({headerTitle}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
      <View style={styles.chartView}>
        {listArray.map(({color, num, text, count}) => {
          return (
            <ItemsCard
              color={color}
              key={num}
              num={num}
              text={text}
              count={count}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ItemsCardComponent;
