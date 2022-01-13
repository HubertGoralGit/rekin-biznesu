import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import { media } from '../utils/index';
import waveImage from '../assets/images/wave.png';
import btcLogo from '../assets/icons/btc.jpg';
import desktopWaveImage from '../assets/images/desktopWave.jpg';
import titleImage from '../assets/images/title.jpg';

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
    z-index: 100;
    &:last-of-type {
        display: none;
    }
    ${media.tablet`
       display: none;
    `};
    ${media.desktop`
        display: none;
    `};
`

const StyledDesktopWave = styled.img`
  display: none;
  z-index: 100;
  ${media.tablet`
    display: block;
    width: 100%;
  `}
  ${media.desktop`
    display: block;
    width: 100%;
  `}
  
`

const Bitcoin = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: -10%;
    left: 10%;
    transform: rotate(347deg);  
    ${media.tablet`
        display: none;
    `}
    ${media.desktop`
        display: none;
    `};
`

const Title = styled.img`
  width: 50%;
`

const Header = () => {
    return (
        <StyledHeader>
            <Navbar />
            <Title src={titleImage}/>
            <WaveWrapper>
                <StyledWave src={waveImage}/>
                <Bitcoin src={btcLogo}/>
                <StyledDesktopWave src={desktopWaveImage}/>
                <StyledWave src={waveImage}/>
            </WaveWrapper>
        </StyledHeader>
    );
}

export default Header;