import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../style';
import socialBtnsPressed from '../components/socialBtnsPressed';
import icons from '../../../constants/icons';

export const socialBtns = [
  {
    iconName: icons.ICON_INST,
    num: 1,
  },
  {
    iconName: icons.ICON_FB,
    num: 2,
  },
  {
    iconName: icons.ICON_BE,
    num: 3,
  },
];

const SocialButtons = () => {
  return (
    <View style={styles.socialIconsView}>
      {socialBtns.map(({iconName, num}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.socialIcons}
            onPress={() => socialBtnsPressed(num)}>
            <Image
              style={{width: '80%', height: '80%'}}
              resizeMode="center"
              source={iconName}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SocialButtons;
