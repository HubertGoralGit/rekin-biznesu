import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/index';

const StyledImg = styled.img`
    padding: 0 10px;
    width: 45px;

    ${media.tablet`
        padding: 0 15px;
        width: 60px;
    `}

    ${media.desktop`
        padding: 0 15px;
        width: 60px;
    `}

`

const SocialIcon = ({ src, alt, href }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <StyledImg src={src} alt={alt}/>
        </a>
    )
};

export default SocialIcon;