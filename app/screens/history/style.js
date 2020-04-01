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
  scrollView: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  bigText: {
    fontSize: 15,
    paddingLeft: 12,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.WHITE,
  },
});

export default styles;
