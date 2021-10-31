import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import Banner from '../Banner/Banner';
import HomeFastSection from '../CartSection/HomeFastSection';
import HomeLastCart from '../CartSection/HomeLastCart';
import PriceList from '../PriceList/PriceList';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Autocomplete></Autocomplete>
            <HomeFastSection></HomeFastSection>
            <Service></Service>
            <PriceList></PriceList>
            <HomeLastCart></HomeLastCart>
        </div>
    );
};

export default Home;