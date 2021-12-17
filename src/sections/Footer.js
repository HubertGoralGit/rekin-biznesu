import React from 'react';
import styled from 'styled-components';
import FooterBackground from '../assets/images/rekinBiznesu.jpeg';

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
    width: 60%;
    height: 500px;
    background: #2D2D2D;
    position: absolute;
    z-index: 100;
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    padding: 60px;
    box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
    border-radius: 8px;
`


const Footer = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <div>
                    <h1>Napisz do mnie</h1>
                    <p></p>
                </div>
                <div>
                    
                </div>
            </FormWrapper>
            <ContentWrapper />
            <PrivacyPolicyWrapper>
                <p>© 2022 Hubert Góral. All rights reserved</p>
            </PrivacyPolicyWrapper>
        </Wrapper>
    )
}

export default Footer;