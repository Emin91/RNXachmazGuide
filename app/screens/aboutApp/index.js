import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {titles} from '../../constants/strings';
import {colors} from '../../constants/colors';
import icons from '../../constants/icons';
import styles from './style';
import HeaderComponent from '../../components/header';
import {bigText} from '../../constants/moreText';
import {FloatingAction} from 'react-native-floating-action';

const actions = [
  {
    text: 'Developer',
    icon: icons.BURGER_MENU,
    name: 'bt_developer',
    position: 2,
    textStyle: {fontSize: 11},
    color: colors.SUB_CLAY,
    textBackground: colors.SUB_CLAY,
    textColor: colors.ORANGE,
  },
  {
    text: 'Bizə yazmaq',
    icon: icons.BURGER_MENU,
    name: 'bt_write',
    position: 1,
    textStyle: {fontSize: 11},
    color: colors.SUB_CLAY,
    textBackground: colors.SUB_CLAY,
    textColor: colors.ORANGE,
  },
];

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
        <View style={styles.titleView}>
          <Text style={styles.title}>{titles.MAIN_TITLE}</Text>
        </View>
        <View style={styles.mainTextView}>
          <Text style={styles.mainText}>{bigText.ABOUT_APP_TEXT}</Text>
        </View>
        <View style={styles.versionView}>
          <Text style={styles.version}>{titles.VERSION}</Text>
        </View>
      </View>
      <FloatingAction
        actions={actions}
        color={colors.ORANGE}
        distanceToEdge={20}
        actionsPaddingTopBottom={0}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
};

export default AboutAppScreen;
