import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import {cards} from './components/cardsArray';
import {colors} from '../../constants/colors';
import {titles} from '../../constants/strings';
import ItemsCardComponent from '../../components/Items';
import ImageCardComponent from '../../components/imageCard';
import TextCardComponent from '../../components/textCard';
import HeaderComponent from '../../components/header';
import styles from './style';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.MAIN_CINDER} />
      <View style={styles.headerComponent}>
        <HeaderComponent title={titles.MAIN_TITLE} navigation={navigation} />
      </View>
      <ScrollView overScrollMode="never" style={styles.scrollView}>
        <ImageCardComponent />
        {cards.map(({headerTitle, textContent}) => {
          return (
            <View key={headerTitle}>
              <TextCardComponent
                headerTitle={headerTitle}
                textContent={textContent}
              />
            </View>
          );
        })}
        <ItemsCardComponent headerTitle={titles.CARDS_TITLE_POPULATION} />
      </ScrollView>
    </View>
  );
};

export default MainScreen;
