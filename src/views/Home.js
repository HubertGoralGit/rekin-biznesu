import React from 'react';
import styled from 'styled-components';
import Header from '../sections/Header';
import Youtube from '../sections/Youtube';
import Footer from '../sections/Footer';
import Crypto from '../sections/Crypto';
import About from '../sections/About';

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Home = () => {
    return (
        <HomeWrapper>
            <Header />
            <About />
            <Youtube />
            <Crypto />
            <Footer />
        </HomeWrapper>
    );
};

export default Home;