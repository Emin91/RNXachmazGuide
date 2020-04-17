import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, Text, ActivityIndicator } from 'react-native';
import { cards } from './components/cardsArray';
import { colors } from '../../constants/colors';
import { titles } from '../../constants/strings';
import ItemsCardComponent from '../../components/Items';
import TextCardComponent from '../../components/textCard';
import HeaderComponent from '../../components/header';
import styles from './style';
import ModalExit from './components/modalExit';
import NewsCardComponent from '../../components/newsCard';
import cheerio from 'react-native-cheerio';

const states = {
  initial: 'INITIAL',
  pending: 'PENDING',
  completed: 'COMPLETED',
  error: 'ERROR',
};

const DOMAIN = 'http://www.xachmaz-ih.gov.az';


const MainScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState(states.initial);

  useEffect(() => {
    const fetchNews = async () => {
      setStatus(states.pending);
      try {
        const searchUrl = `http://www.xachmaz-ih.gov.az/news.htmlff`;
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (status === states.error || !news.length) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }


  return (
    <View style={styles.mainView}>
      <ModalExit visible={modalVisible} setVisible={setModalVisible} />
      <StatusBar backgroundColor={colors.SUB_CLAY} />
      <View style={styles.headerComponent}>
        <HeaderComponent title={titles.MAIN_TITLE} navigation={navigation} />
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView overScrollMode="never" style={styles.scrollView}>
        { 
          <View style={styles.newsView}>
          <View style={styles.newsTitleView}>
            <Text style={styles.newsTitle}>{titles.CARDS_TITLE_NEWS}</Text>
          </View>
          {news.slice(0, 6).map(({ title, date, thumbnailURL, url, description }) => {
            return (
              <NewsCardComponent title={title} date={date} thumbnailURL={thumbnailURL} description={description} url={url} DOMAIN={DOMAIN} />
            );
          })}
        </View>
        }

          {cards.map(({ headerTitle, textContent }) => {
            return (
              <View key={headerTitle}>
                <TextCardComponent
                  headerTitle={headerTitle}
                  textContent={textContent}
                />
              </View>
            );
          })}
          <ItemsCardComponent headerTitle={titles.CARDS_TITLE_POPULATION} />
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;
