import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import NewsLatter from '../NewsLatter/NewsLatter';
import Service from '../Service/Service';

const Home = () => {

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Gallery></Gallery>
            <Category></Category>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;