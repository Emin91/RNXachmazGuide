import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { myFonts } from '../../constants/fonts';

const styles = StyleSheet.create({
    itemsView: {
        paddingHorizontal: 5,
    },
    newsItemRows: {
        flex: 1,
        borderRadius: 5,
        paddingLeft: 5,
        paddingVertical: 5,
        marginTop: 5,
        marginBottom: 2,
        flexDirection: 'row',
        backgroundColor: colors.MAIN_CINDER,
    },
    imgView: {
        flex: 0.35,
        // backgroundColor: '#ff7448',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 5,

    },
    descriptionColumnsView: {
        flex: 0.65,
        paddingHorizontal: 10,
        // backgroundColor: '#ee1248',
    },
    newsTitleView: {
        flex: 1,
        // backgroundColor: '#d45455',
    },
    newsTitle: {
        fontSize: 11,
        fontFamily: myFonts.LATINO,
        color: colors.ORANGE,
    },
    descriptionView: {
        flex: 1,
    },
    descriptionTitle: {
        fontSize: 10,
        marginTop: 5,
        marginVertical: 5,
        color: colors.WHITE,
    },
    detailsView: {
        flex: 1,
        height: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    dateView: {
        flex: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    date: {
        fontSize: 10,
        fontFamily: myFonts.ULTIMA_PRO,
        color: colors.ORANGE,
    },
});

export default styles;
