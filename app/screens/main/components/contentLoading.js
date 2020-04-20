import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import { titles } from '../../../constants/strings';
import { colors } from '../../../constants/colors';
import styles from '../style';

const ContentLoading = () => {
    return (
        <View style={styles.newsView}>
            <View style={styles.newsTitleView}>
                <Text style={styles.newsTitle}>{titles.CARDS_TITLE_NEWS}</Text>
            </View>
            <View style={styles.newsContent}>
                <ActivityIndicator size="large" color={colors.ORANGE} />
            </View>
        </View>
    )
}

export default ContentLoading
