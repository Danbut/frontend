import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.sass"

const Card = () => (
        <div class="card card_big">
                <div class="card__container">
                        <h2 class="card__title">
                                The perfect news community
                                made for everyone
                        </h2>
                        <Link to="/news"><button class="card__btn"><span class="card__btn-text">See what's new</span></button></Link>
                </div>
        </div>
);

export default Card;