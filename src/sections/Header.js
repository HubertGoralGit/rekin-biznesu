import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import heroImage from '../assets/images/heroImage.png';

const StyledHeader = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(120deg, #ffffff, #ffffff 40%, #e39439 40%, #e39439);
`

const StyledHeroImage = styled.img`
    width: 80%;
    position: absolute;
    top: 20%;
`

const Text = styled.div`
    position: absolute;
    top: 30%;
    right: 10%;
    width: 400px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Navbar></Navbar>
            <StyledHeroImage src={heroImage} alt='hero-image'/>
            <Text>
                <h1>O mnie</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </Text>
        </StyledHeader>
    );
}

export default Header;