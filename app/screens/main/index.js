import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { colors } from '../../constants/colors';
import { titles } from '../../constants/strings';
import ItemsCardComponent from '../../components/Items';
import HeaderComponent from '../../components/header';
import NewsCard from './components/newsCard';
import styles from './style';
import DetailsCardComponent from '../../components/detailsCard';

const MainScreen = ({ navigation }) => {

  const infoData = [
    'Daxildir:  Quba-Xaçmaz iqtisadi rayonu',
    'Yaradılıb: 	8 avqust 1930',
    'Sahəsi:  1046 km²',
    'Hündürlük:  20 m',
    'Əhalisi: 	178 100 nəfər',
    'İSO: 	  AZ-XAC',
    'Telefon kodu:  	+994 02332',
    'Poçt indeksi:   AZ 2700',
    'Avtomobil nömrəsi:   27',
  ]

  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent title={titles.MAIN_TITLE} navigation={navigation} />
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <NewsCard />
          <DetailsCardComponent headerTitle={titles.CARDS_TITLE_SHORT_INFO} infoData={infoData}/>
          <ItemsCardComponent headerTitle={titles.CARDS_TITLE_POPULATION} />
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;
