import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {blocks} from './components/blocks';
import {colors} from '../../constants/colors';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import onItemPress from './components/onClick';
import socialBtnsPressed from './components/socialBtnsPressed';
import {images} from '../../constants/images';
import {titles} from '../../constants/strings';

export const socialBtns = [
  {
    iconName: 'instagram-with-circle',
    num: 1,
  },
  {
    iconName: 'facebook-with-circle',
    num: 2,
  },
  {
    iconName: 'behance',
    num: 3,
  },
];

const AboutAuthorScreen = () => {
  return (
    <ImageBackground
      source={images.HEAD}
      blurRadius={5}
      style={styles.imgBackground}>
      <View style={styles.mainView}>
        <View style={styles.detailsViewOne}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>{titles.DEV_PROFILE}</Text>
          </View>
          <View style={styles.imgView}>
            <Image source={images.avatar} style={styles.img} />
          </View>
          <View style={styles.authorView}>
            <Text style={styles.authorName}>{titles.DEV_AUTHOR}</Text>
          </View>
          <View style={styles.socialIconsView}>
            {socialBtns.map(({iconName, num}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.socialIcons}
                  onPress={() => socialBtnsPressed(num)}>
                  <Icon name={iconName} size={30} color={colors.WHITE} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.detailsViewTwo}>
          <View style={styles.infoView}>
            {blocks.map(({blockName, title, num}) => {
              return (
                <>
                  <Text style={styles.title}>{blockName}</Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => onItemPress(num)}>
                    <Text style={styles.touchableTitle}>{title}</Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>
      </View>
      <FloatingAction
        color={colors.DARKULA}
        buttonSize={40}
        showBackground={false}
        onPressMain={() => {
          onItemPress(5);
        }}
        floatingIcon={<Icon name="sharealt" size={15} color={colors.WHITE} />}
      />
    </ImageBackground>
  );
};

export default AboutAuthorScreen;
