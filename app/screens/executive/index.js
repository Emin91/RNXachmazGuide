import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import icons from '../../constants/icons';
import styles from './style';
import HeaderComponent from '../../components/header';

const itemsObj = [
  {
    title: titles.EXECUTIVE_ITEM_ONE,
    nav: '',
  },
  {
    title: titles.EXECUTIVE_ITEM_TWO,
    nav: '',
  },
  {
    title: titles.EXECUTIVE_ITEM_THREE,
    nav: '',
  },
  {
    title: titles.EXECUTIVE_ITEM_FOUR,
    nav: '',
  },
  {
    title: titles.EXECUTIVE_ITEM_FIVE,
    nav: '',
  },
  {
    title: titles.EXECUTIVE_ITEM_SIX,
    nav: '',
  },
];

const Buttons = ({itemsTitle}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.itemView}>
      <Text style={styles.itemText}>{itemsTitle}</Text>
    </TouchableOpacity>
  );
};

const ExecutiveScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_GEO}
          title={titles.MENU_GEO}
          navigation={navigation}
        />
      </View>
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <View style={{flex: 1, paddingTop: 20}}>
          {itemsObj.map(({title}) => {
            return <Buttons itemsTitle={title} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExecutiveScreen;
