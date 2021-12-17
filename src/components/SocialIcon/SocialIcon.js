import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    padding: 0 15px;
`

const SocialIcon = ({ src, alt, href }) => {
    return (
        <a href={href} target='_blank'>
            <StyledImg src={src} alt={alt}/>
        </a>
    )
};

export default SocialIcon;