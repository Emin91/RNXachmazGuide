import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  headerComponent: {
    flex: 0.15,
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  bigText: {
    fontSize: 15,
    paddingHorizontal: 12,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.WHITE,
  },
  titleView: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: myFonts.ALWAYS_RADIO,
    color: colors.ORANGE,
  },
});

export default styles;
