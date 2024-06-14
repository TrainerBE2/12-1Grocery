import React, { useRef } from 'react';
import './CategorySection.css';

const categories = [
  { name: 'Juice', imgSrc: '/images/juice.png' },
  { name: 'Coffee & Tea', imgSrc: '/images/coffee_tea.png' },
  { name: 'Cookies', imgSrc: '/images/cookies.png' },
  { name: 'Round Cake', imgSrc: '/images/round_cake.png' },
  { name: 'Pita Bread', imgSrc: '/images/pita_bread.png' },
  { name: 'Sliced Cake', imgSrc: '/images/sliced_cake.png' },
  { name: 'Muffin', imgSrc: '/images/muffin.png' },
  { name: 'Juice', imgSrc: '/images/juice.png' },
  { name: 'Coffee & Tea', imgSrc: '/images/coffee_tea.png' },
  { name: 'Cookies', imgSrc: '/images/cookies.png' },
  { name: 'Round Cake', imgSrc: '/images/round_cake.png' },
  { name: 'Pita Bread', imgSrc: '/images/pita_bread.png' },
  { name: 'Sliced Cake', imgSrc: '/images/sliced_cake.png' },
  { name: 'Muffin', imgSrc: '/images/muffin.png' },
];

const CategorySection = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    const maxScrollLeft = current.scrollWidth - current.clientWidth;

    if (direction === 'left') {
      if (current.scrollLeft === 0) {
        current.scrollLeft = maxScrollLeft;
      } else {
        current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    } else if (direction === 'right') {
      if (current.scrollLeft >= maxScrollLeft) {
        current.scrollLeft = 0;
      } else {
        current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="category-section">
      <h2>Categories</h2>
      <div className="category-container-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>
          &#8249;
        </button>
        <div className="category-container" ref={containerRef}>
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.imgSrc} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
