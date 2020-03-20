import {StyleSheet} from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.MAIN_CINDER
    },
    img: {
        width: '50%',
        height: 150,
    }
})

export default styles