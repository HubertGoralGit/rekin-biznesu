import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to bottom, #ffffff, #e9edfa, #cbddf5, #a3d0ed, #74c4df, #74c4df, #74c4df, #74c4df, #a3d0ed, #cbddf5, #e9edfa, #ffffff);
`

const SectionTemplate = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
);

export default SectionTemplate;