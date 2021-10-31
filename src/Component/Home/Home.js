import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import Banner from '../Banner/Banner';
import HomeLastCart from '../CartSection/HomeLastCart';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Autocomplete></Autocomplete>
            <Service></Service>
            <HomeLastCart></HomeLastCart>
        </div>
    );
};

export default Home;