import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 600,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 8,
    backgroundColor: colors.SUB_CLAY,
  },
  headerTitleView: {
    flex: 0.1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: myFonts.MONTSERRAT_BOLD,
    color: colors.ORANGE,
  },
  chartView: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default styles;
