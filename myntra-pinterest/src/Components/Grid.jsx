// src/components/Grid.jsx
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Card from './Card';


const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 1,
};

const Grid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='grid-container'>
    <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'start',
      gridAutoFlow: 'inherit',
    }}
    >
      {cards.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} />
      ))}
    </Masonry>
    </div>
  );
};

export default Grid;
