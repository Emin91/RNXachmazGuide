import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../style';

const newIcon = {
  wind: require('../../../assets/icons/wheather/wind.png'),
  pressure: require('../../../assets/icons/wheather/pressure.png'),
  humidity: require('../../../assets/icons/wheather/humidity.png'),
};

const SmallIcon = ({iconName}) => {
  return (
    <Image
      resizeMode={'center'}
      style={styles.whIconSmall}
      source={newIcon[iconName]}
    />
  );
};

const Wheather = ({time, data, dataWh}) => {
  return (
    <View style={styles.whMain}>
      <View style={styles.degreeView}>
        <Text style={styles.degreeText}>
          {Math.round(data.main.temp)}
          {`\xB0`}C
        </Text>
      </View>
      <View style={styles.infoView}>
        <SmallIcon iconName={'wind'} />
        <Text style={styles.infoText}>{data.wind.speed} km/h</Text>
        <SmallIcon iconName={'pressure'} />
        <Text style={styles.infoText}>{data.main.pressure} hPa</Text>
        <SmallIcon iconName={'humidity'} />
        <Text style={styles.infoText}>{data.main.humidity}%</Text>
      </View>
      <View style={{flex: 0.55}}></View>
    </View>
  );
};

export default Wheather;
