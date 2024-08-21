import React from 'react';
import styled from 'styled-components';

const DescriptionStyled = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
`;

const Description = ({ children }) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};

export default Description;