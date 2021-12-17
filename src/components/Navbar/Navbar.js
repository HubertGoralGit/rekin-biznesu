import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import FacebookIcon from '../../assets/icons/facebook.png';
import DiscordIcon from '../../assets/icons/discord.png';
import YoutubeIcon from '../../assets/icons/youtube.png';

const NavbarWrapper = styled.div`
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
`;

const SocialWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    span {
        padding: 0 20px;
    }
`



const Navbar = () => {
    return (
        <NavbarWrapper>
            <h2>Logo</h2>
            <SocialWrapper>
                <SocialIcon src={FacebookIcon} alt='facebook-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                <SocialIcon src={DiscordIcon} alt='discord-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                <SocialIcon src={YoutubeIcon} alt='youtube-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
            </SocialWrapper>
        </NavbarWrapper>
    )
};

export default Navbar;