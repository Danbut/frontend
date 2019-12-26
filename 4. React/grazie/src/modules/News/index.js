import React from 'react';
import NewsCard from './NewsCard';
import news from './news.json';
import Header from '../Header';
import arrow from './arrow.svg';
import { Link } from 'react-router-dom';
import './News.sass';

const News = () => (
    <div class="home">
        <Header />
        <main class="main">
            <div class="container container_direction_column">
                <div class="news-header-container">
                    <Link to="/"><img class="arrow" src={arrow} alt="return"></img></Link>
                    <div class="card news-header-card">
                        <h2 class="card__title">
                                Most recent news
                                from our users
                        </h2>
                    </div>
                </div>
                <div class="news-container">
                    { news.map(news => (
                        <NewsCard nickname={news.nickname} message={news.message} />
                    ))}
                </div>
            </div>
        </main>
    </div>
);

export default News;
