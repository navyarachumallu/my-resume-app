import React, { useState, useEffect } from 'react';
import './FruitHeader.css';

const images = [
  { id: 1, src: '/apple.jpg', alt: 'Apple' },
  { id: 2, src: '/banana.jpg', alt: 'Banana' },
  { id: 3, src: '/custurdapple.jpg', alt: 'Custardapple' },
  { id: 4, src: '/guava.jpg', alt: 'Guava' },
  { id: 5, src: '/fruitbasket.jpg', alt: 'FruitBasket' },
  { id: 6, src: '/jackfruit.jpg', alt: 'JackFruit' },
  { id: 7, src: '/mango.jpg', alt: 'Mango' },
  { id: 8, src: '/orange.jpg', alt: 'Orange' },
  { id: 9, src: '/papaya.jpg', alt: 'Papaya' },
  { id: 10, src: '/pineapple.jpg', alt: 'Pineapple' }
  ];

const FruitHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        
        <p>Get the best quality fruits at your doorstep</p>
      </div>
      <div className="header-slider">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`header-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </header>
  );
};

export default FruitHeader;