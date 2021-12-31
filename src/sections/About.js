import React from 'react';
import styled from 'styled-components';
import SectionTemplate from '../templates/SectionTemplate';
import HeroImg from '../assets/images/shark.png';
import { media } from '../utils/index';

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;
    flex-direction: column;

    ${media.desktop`
        justify-content: space-around;
        flex-direction: row;
    `};

    img {
        height: 600px;
        margin-bottom: 40px;
        display: none;

        ${media.desktop`
            display: block;
        `};
    }

    p {
        width: 100%;
        font-size: 24px;

        ${media.desktop`
            width: 400px;
        `};
    }
`

const About = () => {

    return (
        <SectionTemplate>
            <h1>O mnie</h1>
            <ContentWrapper>
                <img src={HeroImg} alt='hero'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ContentWrapper>
        </SectionTemplate>
    )
}

export default About;