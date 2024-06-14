import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CarouselContainer,
  CarouselImageLink,
  ProductsSection,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  HoverButton,
  CategoriesSection,
  CategoryCard,
  CategoryImage,
  CategoryName,
  AboutSection,
  AboutDescription,
  SectionTitle
} from './StyledHero';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import category1 from '../assets/category1.png';
import category2 from '../assets/category2.png';
import category3 from '../assets/category3.png';
import category4 from '../assets/category4.png';

const HeroCarousel = () => {
  const carouselItems = [
    { href: 'https://example.com/banner1', src: banner1, alt: 'Banner 1' },
    { href: 'https://example.com/banner2', src: banner2, alt: 'Banner 2' },
    { href: 'https://example.com/banner3', src: banner3, alt: 'Banner 3' }
  ];

  const productItems = [
    { id: 1, src: product1, name: 'Product 1', price: 'Rp39.000' },
    { id: 2, src: product2, name: 'Product 2', price: 'Rp36.800' },
    { id: 3, src: product4, name: 'Product 3', price: 'Rp82.500 - Rp89.000' },
    { id: 4, src: product4, name: 'Product 4', price: 'Rp17.550 - Rp119.250' },
    { id: 5, src: product5, name: 'Product 5', price: 'Rp103.607' }
  ];

  const categoryItems = [
    { src: category1, name: 'Category 1' },
    { src: category2, name: 'Category 2' },
    { src: category3, name: 'Category 3' },
    { src: category4, name: 'Category 4' }
  ];

  return (
    <>
      <CarouselContainer>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {carouselItems.map((item, index) => (
            <div key={index}>
              <CarouselImageLink href={item.href} target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={item.alt} />
              </CarouselImageLink>
            </div>
          ))}
        </Carousel>
      </CarouselContainer>

      <SectionTitle>Categories</SectionTitle>
      <CategoriesSection>
        {categoryItems.map((item, index) => (
          <CategoryCard key={index}>
            <CategoryImage src={item.src} alt={item.name} />
            <CategoryName>{item.name}</CategoryName>
          </CategoryCard>
        ))}
      </CategoriesSection>

      <SectionTitle>Products</SectionTitle>
      <ProductsSection>
        {productItems.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.src} alt={product.name} />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <HoverButton className="add-to-cart">Add to Cart</HoverButton>
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductsSection>

      <AboutSection>
        <AboutDescription>
          Welcome to our Grocery App! We offer a wide range of fresh products, delivered to your doorsteps. Enjoy the best quality and service with us.
        </AboutDescription>
      </AboutSection>
    </>
  );
};

export default HeroCarousel;
