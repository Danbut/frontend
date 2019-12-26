import React from 'react';
import './NewsCard.sass';

const NewsCard = props => {
    const { nickname, message } = props;
    return (
        <div class="card news_card">
            <h3 class="news-card-title">{nickname} <span>says:</span></h3>
            <p class="news-card-message">{`"${message}"`}</p>
        </div>
    );
}

export default NewsCard;
