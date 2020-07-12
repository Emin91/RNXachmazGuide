import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DetailsCardComponent = ({headerTitle, infoData}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
      <View style={styles.chartView}>
          {infoData.map((item, i)=>{
             return <Text key={i} style={styles.descriptionTitle}>{item}</Text>
          })}
      </View>
    </View>
  );
};

export default DetailsCardComponent;
