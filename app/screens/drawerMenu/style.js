import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  imageView: {
    flex: 0.3,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  menuTitleView: {
    flex: 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.ORANGE,
  },
  contentView: {
    flex: 0.5,
  },
  touchableItems: {
    height: 30,
    justifyContent: 'center',
  },
  menuItemsText: {
    fontSize: 20,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.WHITE,
    paddingLeft: 20,
  },
  menuItemsTextSelected: {
    fontSize: 22,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.ORANGE,
    paddingLeft: 20,
  },
  downView: {
    flex: 0.12,
    paddingBottom: 7,
    justifyContent: 'flex-end',
  },
  //Wheather
  whMain: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  degreeView: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  degreeText: {
    fontSize: 28,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.ORANGE,
    paddingLeft: 10,
  },
  whIcon: {
    width: '10%',
    height: '100%',
    marginLeft: 7,
  },
  infoView: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whIconSmall: {
    width: '5%',
    height: '100%',
    marginLeft: 5,
  },
  infoText: {
    fontSize: 12,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.ORANGE,
    paddingLeft: 5,
  },
});

export default styles;
