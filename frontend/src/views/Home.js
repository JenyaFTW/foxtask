import { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import CountUp from 'react-countup';

const Home = () => {
    return (
        <div id="home">
            <div className="home__title">Welcome, Jenya!</div>
            <div className="top__grid">
                <div className="grid__item">
                    <div className="item__text">
                        You have <CountUp end={3} duration={1} /> tasks today
                    </div>
                </div>
                <div className="grid__item">
                    <div className="item__text">
                        You must work <CountUp end={3} duration={1} /> hours today.
                    </div>
                </div>
                <div className="grid__item">
                    <div className="item__text">
                        You've completed <CountUp end={57} duration={1} /> tasks this week.
                    </div>
                </div>
                <div className="grid__item">
                    <div className="item__text">
                        You've spent <CountUp end={43} duration={1} /> hrs on tasks this week.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;