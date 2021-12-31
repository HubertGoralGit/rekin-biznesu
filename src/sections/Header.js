import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import { media } from '../utils/index';
import waveImage from '../assets/images/wave.png';
import btcLogo from '../assets/icons/btc.png';

const FadeIn = keyframes`
    from {
        opacity: 0;
        top: 17%;
    }
    to {
        opacity: 1;
        top: 20%;
    }
`

const StyledHeader = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    h1 {
        text-align: center;
        animation: ${FadeIn} 1s linear;
        position: absolute;
        width: 100%;
        top: 20%;
    }
`

const WaveWrapper = styled.div`
    display: flex;
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
 `

const StyledWave = styled.img`
    width: 100%;
    &:last-of-type {
        display: none;
    }
    ${media.tablet`
        display: block;
        width: calc(50% + 3px);
        margin-left: -3px;

        &:last-of-type {
            display: block;
            transform: rotateY(180deg);
        }
    `};
    ${media.desktop`
        display: block;
        width: calc(50% + 3px);
        margin-left: -3px;

        &:last-of-type {
            display: block;
            transform: rotateY(180deg);
        }
    `};
`

const Bitcoin = styled.img`
    width: 75px;
    height: 75px;
    position: absolute;
    top: 0;
    left: 10%;
    transform: rotate(347deg);  
    ${media.tablet`
        width: 70px;
        height: 70px;
        top: 35%;
        left: calc(50% - 35px);
    `}
    ${media.desktop`
        width: 100px;
        height: 100px;
        top: 35%;
        left: calc(50% - 50px);
    `};
`

const Header = () => {
    return (
        <StyledHeader>
            <Navbar />
            <h1>Rekin Biznesu</h1>
            <WaveWrapper>
                <StyledWave src={waveImage}/>
                <Bitcoin src={btcLogo}/>
                <StyledWave src={waveImage}/>
            </WaveWrapper>
        </StyledHeader>
    );
}

export default Header;