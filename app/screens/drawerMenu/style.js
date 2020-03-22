import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  imageView: {
    flex: 0.25,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  menuTitleView: {
    flex: 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.ORANGE,
  },
  contentView: {
    flex: 0.5,
  },
  touchableItems: {
    height: 30,
    justifyContent: 'center',
  },
  menuItemsText: {
    fontSize: 20,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.WHITE,
    paddingLeft: 20,
  },
  menuItemsTextSelected: {
    fontSize: 22,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.ORANGE,
    paddingLeft: 20,
  },
  downView: {
    flex: 0.17,
    paddingBottom: 7,
    justifyContent: 'flex-end',
  },
});

export default styles;
