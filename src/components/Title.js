import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-top: 20px;
`;

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export default Title;
