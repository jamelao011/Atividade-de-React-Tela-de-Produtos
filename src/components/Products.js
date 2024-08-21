import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 40px 0;
`;

const Products = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
