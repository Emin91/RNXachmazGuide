import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { titles } from '../../../constants/strings';
import styles from '../style';

const ContentNotLoaded = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.errorTitle}>{titles.CONTENT_NOT_LOADED}</Text>
        </View>
    )
}

export default ContentNotLoaded
