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
  itemTitle: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: myFonts.BALOO,
    color: colors.ORANGE,
  },
  itemText: {
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.WHITE,
  },
});

export default styles;
