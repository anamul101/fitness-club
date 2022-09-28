import React from 'react';
import CardExersice from './CardExersice/CardExersice';
import ExersiceDetails from './ExersiceDetails/ExersiceDetails';

const Home = () => {
    return (
        <div>
            <CardExersice></CardExersice>
            <ExersiceDetails></ExersiceDetails>
        </div>
    );
};

export default Home;