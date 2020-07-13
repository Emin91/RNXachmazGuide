import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {titles} from '../../../constants/strings';
import NewsCardComponent from '../../../components/newsCard';
import styles from '../style';
import cheerio from 'react-native-cheerio';
import ContentLoading from './contentLoading';
import ContentNotLoaded from './contentNotLoaded';
import RandomNewCard from '../../../components/randomNewCard';
import { useSelector } from 'react-redux';

const states = {
  initial: 'INITIAL',
  pending: 'PENDING',
  completed: 'COMPLETED',
  error: 'ERROR',
};

const DOMAIN = 'http://www.xachmaz-ih.gov.az';

const NewsCardPreview = () => {
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState(states.initial);

  const {counter, isNewsWithImage} = useSelector(state => state.newsReducer)

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


  return (
    <View style={styles.newsViewPreview}>
      {news.slice(0, 1).map((item, index) => {
              return isNewsWithImage ?
                <NewsCardComponent
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  thumbnailURL={item.thumbnailURL}
                  description={item.description}
                  url={item.url}
                  index={index}
                  domain={DOMAIN}
                />
               : 
                <RandomNewCard
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  thumbnailURL={item.thumbnailURL}
                  description={item.description}
                  url={item.url}
                  index={index}
                  domain={DOMAIN}
                />
            })}
    </View>
  );
};

export default NewsCardPreview;
