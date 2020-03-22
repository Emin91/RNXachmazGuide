import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 300,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 8,
    backgroundColor: colors.SUB_CLAY,
  },
  headerTitleView: {
    flex: 0.15,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  img: {
    borderRadius: 10,
    width: 325,
    height: '100%',
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: myFonts.MONTSERRAT_BOLD,
    color: colors.ORANGE,
  },
  imageSliderView: {
    flex: 1,
    // backgroundColor: 'red',
    // marginHorizontal: 10,
  },
  scrollContentView: {
    flex: 0.85,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
