import React from 'react';
import {View, Text, Image} from 'react-native';
import {iconsObj} from '../../../constants/iconsObject';
import styles from '../style';

const Wheather = ({data, dataWh}) => {
  return (
    <View style={styles.whMain}>
      <View style={styles.degreeView}>
        <Text style={styles.degreeText}>
          {Math.round(data.main.temp)}
          {`\xB0`}C
        </Text>
        <Image
          style={styles.whIcon}
          source={iconsObj[dataWh[0].icon] || iconsObj['01d']}
        />
      </View>
      <View style={styles.infoView}>
        <Image
          resizeMode={'center'}
          style={styles.whIconSmall}
          source={require('../../../assets/icons/wheather/wind.png')}
        />
        <Text style={styles.infoText}>{data.wind.speed}km/h</Text>
        <Image
          resizeMode={'center'}
          style={styles.whIconSmall}
          source={require('../../../assets/icons/wheather/pressure.png')}
        />
        <Text style={styles.infoText}>{data.main.pressure} hPa</Text>
        <Image
          resizeMode={'center'}
          style={styles.whIconSmall}
          source={require('../../../assets/icons/wheather/humidity.png')}
        />
        <Text style={styles.infoText}>{data.main.humidity}%</Text>
      </View>
      <View style={{flex: 0.55}}></View>
    </View>
  );
};

export default Wheather;
