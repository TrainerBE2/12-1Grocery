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
  color: #006769;  /* Primary color */
`;

export const ProductPrice = styled.p`
  font-size: 0.9em;
  color: #9DDE8B;  /* Accent color */
`;

export const HoverButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #006769;  /* Primary color */
  color: #fff;  /* White */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8em;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    background-color: #004d4f;  /* Darker shade of primary color */
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
  color: #006769;  /* Primary color */
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

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  text-align: center; /* Center the text */
`;

export const AboutTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #006769;  /* Primary color */
`;

export const AboutDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #333;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AboutIcon = styled.div`
  font-size: 3em;
  color: #9DDE8B;  /* Accent color */
  margin-bottom: 20px;
`;
