import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {menuItemsListOne, menuItemsListTwo} from './components/menuItemsList';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';
import styles from './style';
import MenuItems from './components/mainItems';
import {iconsObj} from '../../constants/iconsObject';
import Wheather from './components/wheather';

const DrawerMenuItems = ({navigation}) => {
  const [data, setData] = useState({});
  console.log('data', data);
  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Xacmaz&appid=4486e591bd278be78e989429da35190c&units=metric',
    )
      .then(response => response.json())
      .then(setData)
      .catch(console.log());
  }, []);

  const {weather} = data;
  console.log('weather', weather);

  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        {weather ? <Wheather data={data} dataWh={weather} /> : null}
        <Image style={styles.img} source={images.IMG_2} />
      </View>
      <View style={styles.menuTitleView}>
        <Text style={styles.menuTitle}>{titles.MENU_TITLE}</Text>
      </View>
      <View style={styles.contentView}>
        <MenuItems navigation={navigation} arrays={menuItemsListOne} />
      </View>
      <View style={styles.downView}>
        <MenuItems navigation={navigation} arrays={menuItemsListTwo} />
      </View>
    </View>
  );
};

export default DrawerMenuItems;
