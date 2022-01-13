import React from 'react';
import styled, { keyframes }  from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import DiscordIcon from '../../assets/icons/discord.png';
import YoutubeIcon from '../../assets/icons/youtube.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import Logo from '../../assets/icons/logo.png';

const FadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const NavbarWrapper = styled.div`
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    animation: ${FadeIn} 1s linear;
    //background-image: linear-gradient(#74c4df, white);
    z-index: 1;
`;

const SocialWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    span {
        padding: 0 20px;
    }
`

const LogoImage = styled.img`
    width: 60px;
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoImage src={Logo} />
            <SocialWrapper>
                <SocialIcon src={TwitterIcon} alt='twitter-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                <SocialIcon src={DiscordIcon} alt='discord-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                <SocialIcon src={YoutubeIcon} alt='youtube-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                <SocialIcon src={InstagramIcon} alt='instagram  -icon' href='https://www.youtube.com/c/RekinBiznesu'/>
            </SocialWrapper>
        </NavbarWrapper>
    )
};

export default Navbar;