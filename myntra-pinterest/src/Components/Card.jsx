
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, imageUrl, title }) => {
  return (
    <Link to='/Details'>
      <div className="card">
        <img src={imageUrl} alt={title} />
        {/* <p>{title}</p> */}
      </div>
    </Link>
  );
};

export default Card;

