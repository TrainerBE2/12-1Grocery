import React from 'react';
import './ProductPage.css';
import category1 from '../assets/category1.png';

const sampleProduct = {
  name: 'Product name',
  subheading: 'Subheading',
  price: '10.99',
  description: 'Body text for describing why this product is simply a must-buy',
  imageUrl: category1,
  relatedProducts: [
    {
      id: 1,
      name: 'Product',
      description: 'Body text for first product',
      price: '10.99',
      imageUrl: category1
    },
    {
      id: 2,
      name: 'Product',
      description: 'Body text for second product',
      price: '10.99',
      imageUrl: category1
    },
    {
      id: 3,
      name: 'Product',
      description: 'Body text for third product',
      price: '10.99',
      imageUrl: category1
    }
  ]
};

const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductDetails product={sampleProduct} />
      <RelatedProducts products={sampleProduct.relatedProducts} />
    </div>
  );
};

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-info">
        <h1 className="judul">{product.name}</h1>
        <h2 className="subjudul">{product.subheading}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button>Add to cart</button>
        <p className="fine-print">Text box for additional details or fine print</p>
      </div>
    </div>
  );
};

const RelatedProducts = ({ products }) => {
  return (
    <div className="related-products">
      <h3>Related products</h3>
      <div className="related-products-list">
        {products.map((product) => (
          <div key={product.id} className="related-product">
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
