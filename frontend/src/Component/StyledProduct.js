// src/Component/StyledProduct.js
import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 8px;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin: 8px 0;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
  margin: 8px 0;
`;

export const ProductButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
