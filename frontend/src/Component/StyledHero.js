import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const CarouselImageLink = styled.a`
  display: block;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const ProductsSection = styled.div`
  padding: 40px 20px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);

    .add-to-cart {
      opacity: 1;
    }
  }
`;

export const ProductImage = styled.img`
  width: 75%;
  height: auto;
`;

export const ProductDetails = styled.div`
  padding: 10px;
`;

export const ProductName = styled.h3`
  font-size: 1em;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 0.9em;
  color: green;
`;

export const HoverButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff69b4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8em;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    background-color: #ff1493;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 20px;
`;

export const CategoryCard = styled.div`
  width: 180px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CategoryName = styled.h3`
  font-size: 1em;
  margin: 10px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const AboutSection = styled.div`
  padding: 40px 20px;
  background-color: #f1f1f1;
  text-align: center;
`;

export const AboutDescription = styled.p`
  font-size: 1.2em;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
`;
