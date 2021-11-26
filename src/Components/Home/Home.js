import React from 'react';
import Banner from './Banner';
import Events from './Events';

import Section1 from './Section1';
import Section2 from './Section2';
import Section4 from './Section4';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Events></Events>
            <Section4></Section4>
        </div>
    );
};

export default Home;