import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.MAIN_CINDER,
  },
  headerView: {
    flex: 0.8,
    flexDirection: 'row',
    borderBottomRightRadius: 32,
    backgroundColor: colors.SUB_CLAY,
  },
  iconView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
  },
  titleView: {
    flex: 0.7,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 23,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.WHITE,
  },
  iconMenuView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  burgerIcon: {
    marginRight: 20,
    width: '30%',
    height: '30%',
  },
});

export default styles;
