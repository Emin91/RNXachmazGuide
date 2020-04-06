import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {textElements} from './components/textElements';
import {TextViews} from './components/textViews';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import icons from '../../constants/icons';
import styles from './style';
import HeaderComponent from '../../components/header';
import FloatingButton from './components/floatingButton';

const AboutAppScreen = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent
          iconName={icons.MENU_ABOUT}
          title={titles.MENU_ABOUT_APP}
          navigation={navigation}
        />
      </View>
      <View style={styles.secondView}>
        <View style={styles.iconView}>
          <Image
            resizeMode="center"
            style={styles.icon}
            source={icons.ICON_ABOUT_APP}
          />
        </View>
        {textElements.map(({viewStyle, textStyle, text}) => {
          return (
            <TextViews
              viewStyle={viewStyle}
              textStyle={textStyle}
              text={text}
            />
          );
        })}
      </View>
      <FloatingButton />
    </View>
  );
};

export default AboutAppScreen;
