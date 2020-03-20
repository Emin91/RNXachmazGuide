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
    fontFamily: myFonts.AVEN_BVOLD_B,
    color: colors.ORANGE,
  },
  contentView: {
    flex: 0.5,
  },
  menuItems: {
    fontSize: 20,
    fontFamily: myFonts.AVEN_BVOLD_B,
    color: colors.WHITE,
    paddingTop: 5,
    paddingLeft: 20,
  },
});

export default styles;
