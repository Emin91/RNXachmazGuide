import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {myFonts} from '../../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.SUB_CLAY,
    borderRadius: 5,
    marginVertical: 2,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPreview: {
    flex: 1,
  },
  headerComponent: {
    flex: 0.1,
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    paddingBottom: 5,
    paddingHorizontal: 12,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.WHITE,
  },
});

export default styles;
