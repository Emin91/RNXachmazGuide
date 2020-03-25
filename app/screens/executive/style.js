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
  },
  //Items
  itemView: {
    width: '95%',
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.ORANGE,
  },
  itemText: {
    fontSize: 17,
    paddingVertical: 20,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.SUB_CLAY,
  },
});

export default styles;
