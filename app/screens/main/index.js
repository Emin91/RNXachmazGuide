import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { cards } from './components/cardsArray';
import { colors } from '../../constants/colors';
import { titles } from '../../constants/strings';
import ItemsCardComponent from '../../components/Items';
import TextCardComponent from '../../components/textCard';
import HeaderComponent from '../../components/header';
import ModalExit from './components/modalExit';
import NewsCard from './components/newsCard';
import styles from './style';

const MainScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainView}>
      <ModalExit visible={modalVisible} setVisible={setModalVisible} />
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent title={titles.MAIN_TITLE} navigation={navigation} />
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <NewsCard />
          {cards.map(({ headerTitle, textContent }) => {
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
    </View>
  );
};

export default MainScreen;
