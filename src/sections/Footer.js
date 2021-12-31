import React from 'react';
import styled from 'styled-components';
import FooterBackground from '../assets/images/rekinBiznesu.jpeg';
import Form from '../components/Form/Form';
import { media } from '../utils/index';
import InstagramLogo from '../assets/icons/instagram-white.png';
import DiscordLogo from '../assets/icons/discord-white.png';
import TwitterLogo from '../assets/icons/twitter-white.png';
import YoutubeLogo from '../assets/icons/youtube-white.png';
import SocialIcon from '../components/SocialIcon/SocialIcon';

const Wrapper = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: flex-end;
    position: relative;
`

const ContentWrapper = styled.div`
    width: 100%;
    height: 500px;
    background: url(${FooterBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`

const PrivacyPolicyWrapper = styled.div`
    text-align: center;
    background-color: #2D2D2D;
    width: 100%;
    color: #fff;

`

const FormWrapper = styled.div`
    width: 90%;
    height: 500px;
    background: #2D2D2D;
    position: absolute;
    z-index: 100;
    top: 5%;
    display: flex;
    color: #fff;
    padding: 40px;
    box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
    border-radius: 8px;
    flex-direction: column;
    ${media.desktop`
        width: 60%;
        padding: 100px;
    `}
    
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    ${media.desktop`
        flex-direction: row;
    `}
`

const ContentContainer = styled.div`
    width: 100%;

    ${media.desktop`
        width: 50%;
    `}
    &.text-wrapper {
        display: flex;
        flex-direction: column;

        ${media.desktop`
            margin-right: 10px;
        `}
    }
`

const SocialWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    ${media.desktop`
        display: flex;
        justify-content: center;    
    `}

    img {
        :hover {
            cursor: pointer;
        }

        ${media.desktop`
            margin: 0 10px;
    `}
    }
`

const Text = styled.p`
    display: none;
    ${media.desktop`
        display: block;
    `}
`

const StyledSocialIcon = styled(SocialIcon)`
        width: 30px;
        :hover {
            cursor: pointer;
        }   
        ${media.desktop`
            width: 40px;
            margin: 0 10px;
    `}
`


const Footer = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <FooterContent>
                    <ContentContainer className='text-wrapper'>
                        <h1>Napisz do mnie</h1>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </ContentContainer>
                    <ContentContainer>
                        <Form />
                    </ContentContainer>
                </FooterContent>
                <SocialWrapper>
                    <StyledSocialIcon src={TwitterLogo} alt='twitter-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                    <StyledSocialIcon src={DiscordLogo} alt='discord-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                    <StyledSocialIcon src={YoutubeLogo} alt='youtube-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                    <StyledSocialIcon src={InstagramLogo} alt='instagram-icon' href='https://www.youtube.com/c/RekinBiznesu'/>
                </SocialWrapper>
            </FormWrapper>
            <ContentWrapper />
            <PrivacyPolicyWrapper>
                <p>© 2022 Hubert Góral. All rights reserved</p>
            </PrivacyPolicyWrapper>
        </Wrapper>
    )
}

export default Footer;