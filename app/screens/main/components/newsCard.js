import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import { titles } from '../../../constants/strings';
import styles from '../style';
import NewsCardComponent from '../../../components/newsCard';
import cheerio from 'react-native-cheerio';
import { colors } from '../../../constants/colors';

const states = {
    initial: 'INITIAL',
    pending: 'PENDING',
    completed: 'COMPLETED',
    error: 'ERROR',
};

const DOMAIN = 'http://www.xachmaz-ih.gov.az';

const NewsCard = () => {
    const [news, setNews] = useState([]);
    const [status, setStatus] = useState(states.initial);

    useEffect(() => {
        const fetchNews = async () => {
            setStatus(states.pending);
            try {
                const searchUrl = `http://www.xachmaz-ih.gov.az/news.html`;
                const response = await fetch(searchUrl);
                const htmlString = await response.text();
                const $ = cheerio.load(htmlString);

                const newsList = [];

                $('.news-list li').each((index, node) => {
                    const titleNode = $(node).find('.news-title a');
                    const title = titleNode.text();
                    const url = titleNode.attr('href');
                    const date = $(node)
                        .find('.news-date')
                        .text();
                    const description = $(node)
                        .find('.news-short-content')
                        .text();
                    const thumbnailURL = $(node)
                        .find('.news-thumb')
                        .attr('src');

                    newsList.push({
                        title,
                        date,
                        description,
                        thumbnailURL,
                        url,
                    });
                });
                setNews(newsList);
                setStatus(states.completed);
            } catch (e) {
                setStatus(states.error);
            }
        };
        fetchNews();
    }, []);

    if (status === states.pending || status === states.initial) {
        return (
            <View style={styles.newsView}>
                <View style={styles.newsTitleView}>
                    <Text style={styles.newsTitle}>{titles.CARDS_TITLE_NEWS}</Text>
                </View>
                <View style={styles.newsContent}>
                    <ActivityIndicator size="large" color={colors.ORANGE} />
                </View>
            </View>
        );
    }

    if (status === states.error || !news.length) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.errorTitle}>Xəbərlər bölməsi yüklənilmədi</Text>
            </View>
        );
    }

    return (
        <View style={styles.newsView}>
            <View style={styles.newsTitleView}>
                <Text style={styles.newsTitle}>{titles.CARDS_TITLE_NEWS}</Text>
            </View>
            <View style={styles.newsContent}>
                {
                    news.slice(0, 6)
                        .map(({ title, date, thumbnailURL, url, description }) => {
                            return (
                                <NewsCardComponent
                                    key={title}
                                    title={title}
                                    date={date}
                                    thumbnailURL={thumbnailURL}
                                    description={description}
                                    url={url}
                                    domain={DOMAIN}
                                />
                            );
                        })
                }
            </View>
        </View>
    )
}

export default NewsCard
