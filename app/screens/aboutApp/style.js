import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  headerComponent: {
    flex: 0.1,
  },
  secondView: {
    flex: 0.9,
  },
  iconView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '90%',
    height: '90%',
  },
  titleView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: myFonts.BALOO,
    color: colors.ORANGE,
  },
  mainTextView: {
    flex: 0.5,
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },
  mainText: {
    fontSize: 22,
    fontFamily: myFonts.LATINO,
    color: colors.WHITE,
  },
  versionView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontSize: 12,
    fontFamily: myFonts.MONTSERRAT,
    color: '#858585',
  },
});

export default styles;
