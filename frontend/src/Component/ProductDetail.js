// src/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  const product = {
    name: 'Product name',
    subheading: 'Subheading',
    price: '10.99',
    description: 'Body text for describing why this product is simply a must-buy',
    imageUrl: '/path/to/your/image.png', // Update this with the correct image path
    finePrint: 'Text box for additional details or fine print',
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <h2>{product.subheading}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button>Add to cart</button>
        <p className="fine-print">{product.finePrint}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
