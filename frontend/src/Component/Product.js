import React from 'react';
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductButton,
} from './StyledProduct';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import image1 from '../assets/folder/download (8).jpg';



const Product = ({ image, name, price }) => {
  return (
    <ProductContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <ProductButton>
        <FontAwesomeIcon icon={faShoppingCart} />
      </ProductButton>
    </ProductContainer>
  );
};

const products = [
  {
    image: image1,
    name: 'Stroberi 1kg',
    price: 'Rp 47.000'
  },
  {
    image: 'path_to_kiwi_image',
    name: 'Kiwi 1kg',
    price: 'Rp 47.000'
  },
  {
    image: 'path_to_watermelon_image',
    name: 'Semangka 1kg',
    price: 'Rp 47.000'
  },
  {
    image: 'path_to_orange_image',
    name: 'Jeruk 1kg',
    price: 'Rp 47.000'
  }
];

export { products };
export default Product;
