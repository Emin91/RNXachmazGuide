import React, {useState} from 'react';
import {View, ScrollView, StatusBar, BackHandler} from 'react-native';
import {cards} from './components/cardsArray';
import {colors} from '../../constants/colors';
import {titles} from '../../constants/strings';
import ItemsCardComponent from '../../components/Items';
import ImageCardComponent from '../../components/imageCard';
import TextCardComponent from '../../components/textCard';
import HeaderComponent from '../../components/header';
import styles from './style';
import ModalExit from './components/modalExit';

const MainScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainView}>
      <ModalExit visible={modalVisible} setVisible={setModalVisible} />
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent title={titles.MAIN_TITLE} navigation={navigation} />
      </View>
      <View style={{flex: 0.9}}>
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
    </View>
  );
};

export default MainScreen;
