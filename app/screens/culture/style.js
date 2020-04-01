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
    paddingHorizontal: 12,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.WHITE,
  },
  titleView: {
    width: '100%',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.ORANGE,
  },
  descriptionView: {
    width: '100%',
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 15,
    paddingHorizontal: 10,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.WHITE,
  },
  infoView: {
    width: '100%',
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: colors.ORANGE,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 13,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.SUB_CLAY,
  },
});

export default styles;
