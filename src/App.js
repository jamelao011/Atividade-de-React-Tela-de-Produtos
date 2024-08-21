import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const products = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 1',
    description: 'Descrição do produto 1',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 2',
    description: 'Descrição do produto 2',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 3',
    description: 'Descrição do produto 3',
  },
];

function App() {
  return (
    <div>
      <Title>Produtos Disponíveis</Title>
      <Description>Explore nossos produtos de qualidade</Description>
      <Products products={products} />
    </div>
  );
}

export default App;
