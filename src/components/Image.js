import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Image = ({ src, alt }) => {
  return <ImageStyled src={src} alt={alt} />;
};

export default Image;
