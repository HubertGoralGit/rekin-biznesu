import React from "react";
import styled from 'styled-components';
import { media } from '../../utils/index';

const StyledIframe = styled.iframe`
    left: 0;
    top: 0;
    margin-bottom: 40px;
    width: 100%;
    height: 300px;

    ${media.tablet`
      width: 500px;
    `}

    ${media.desktop`
      width: 500px;
    `}
`

const YoutubeEmbed = ({ embedId }) => (
    <StyledIframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

);

export default YoutubeEmbed;