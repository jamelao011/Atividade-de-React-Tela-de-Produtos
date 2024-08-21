import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const CardStyled = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin: 16px 0 8px;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #777;
`;

const Card = ({ product }) => {
  return (
    <CardStyled>
      <Image src={product.image} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardStyled>
  );
};

export default Card;
