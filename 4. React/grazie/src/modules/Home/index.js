import React from 'react';
import Header from '../Header';
import Card from './Card';
import "./Home.sass";

const Home = () => (
    <div class="home">
        <Header />
        <main class="main">
            <div class="container container_align-items-center">
                <Card />
            </div>
        </main>
    </div>
);

export default Home;
