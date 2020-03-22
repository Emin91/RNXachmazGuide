import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {myFonts} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.MAIN_CINDER,
  },
  headerComponent: {
    flex: 0.13,
  },
  scrollView: {
    flex: 0.55,
  },
  descriptionText: {
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 12,
    fontFamily: myFonts.MONTSERRAT,
    color: colors.WHITE,
  },
  descriptionListTitle: {
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center',
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.ORANGE,
  },
  //Card
  cardView: {
    marginTop: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: colors.ORANGE,
  },
  headerView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 13,
    paddingVertical: 10,
    alignSelf: 'center',
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.SUB_CLAY,
  },
  contentView: {
    flex: 0.8,
  },
  linesViewRow: {
    flex: 0.11,
    flexDirection: 'row',
  },
  tableName: {
    flex: 0.4,
    justifyContent: 'center',
  },
  tableNameTitle: {
    fontSize: 12,
    paddingLeft: 10,
    paddingVertical: 5,
    fontFamily: myFonts.ULTIMA_PRO,
    color: colors.SUB_CLAY,
  },
  tableDescription: {
    flex: 0.6,
    justifyContent: 'center',
  },
  tableDescriptionTitle: {
    fontSize: 10,
    paddingVertical: 5,
    fontFamily: myFonts.LATINO,
    color: colors.SUB_CLAY,
  },
});

export default styles;
