import React, { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { colors } from '../../constants/colors';
import { titles } from '../../constants/strings';
import HeaderComponent from '../../components/header';
import styles from './styles';

const NewsScreen = ({ navigation }) => {

    return (
        <View style={styles.mainView}>
            <StatusBar backgroundColor={colors.SUB_CLAY} />
            <View style={styles.headerComponent}>
                <HeaderComponent title={titles.MAIN_TITLE} navigation={navigation} />
            </View>
            <View style={{ flex: 0.9 }}>
                <ScrollView overScrollMode="never" style={styles.scrollView}>

                </ScrollView>
            </View>
        </View>
    );
};

export default NewsScreen;
