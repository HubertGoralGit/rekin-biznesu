import React from "react";
import styled from 'styled-components';

const StyledIframe = styled.iframe`
    left: 0;
    top: 0;
`

const YoutubeEmbed = ({ embedId }) => (
    <StyledIframe
      width="500"
      height="350"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

);

export default YoutubeEmbed;