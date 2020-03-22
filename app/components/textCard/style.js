import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderRadius: 12,
    marginTop: 8,
    marginHorizontal: 8,
    backgroundColor: colors.SUB_CLAY,
  },
  headerTitleView: {
    flex: 0.15,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 25,
    paddingTop: 5,
    fontFamily: myFonts.MONTSERRAT_BOLD,
    color: colors.ORANGE,
  },
  viewMore: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  infoText: {
    fontFamily: myFonts.MONTSERRAT,
    fontSize: 15,
    color: colors.WHITE,
  },
});

export default styles;
