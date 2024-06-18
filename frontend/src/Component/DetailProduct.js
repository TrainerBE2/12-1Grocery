import React from 'react';
import DetailProduct from './DetailProduct'; 
import product1 from '../assets/product1.png'; 
import product2 from '../assets/product2.png'; 
import product3 from '../assets/product4.png'; 
import product4 from '../assets/product5.png'; 
import product5 from '../assets/category1.png'; 

const productItems = [
  { id: 1, src: product1, name: 'Product 1', price: 'Rp39.000' },
  { id: 2, src: product2, name: 'Product 2', price: 'Rp36.800' },
  { id: 3, src: product3, name: 'Product 3', price: 'Rp82.500 - Rp89.000' },
  { id: 4, src: product4, name: 'Product 4', price: 'Rp17.550 - Rp119.250' },
  { id: 5, src: product5, name: 'Product 5', price: 'Rp103.607' }
];

const ProductList = () => {
  return (
    <div>
      {productItems.map(product => (
        <DetailProduct
          key={product.id}
          id={product.id}
          src={product.src}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
