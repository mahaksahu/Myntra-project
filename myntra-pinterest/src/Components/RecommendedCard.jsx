import React from 'react';

const RecommendedCard = ({ imageUrl, title, price, mrp, externalLink }) => {
  return (
    <div className="recommended-card flex flex-col justify-between bg-white rounded-lg shadow-md p-4 w-52 max-w-xs">
      <img src={imageUrl} alt={title} className="w-full h-56 rounded-t-lg mb-2" />
      <div className="offer-price flex">
        <h4 className="text-lg font-semibold mb-2">₹{price}</h4>
        <h4 className="text-sm font-gray-50 ml-2 mt-2">MRP</h4>
        <h4 className=" mrp text-xs font-gray-50 ml-1 mt-3">₹{mrp}</h4>
        </div> 
      <button className="view-product bg-white text-black py-2 rounded w-full"> <a href={externalLink} target="_blank">View Product</a></button>
      <button className="add-to-bag bg-blue-500 text-white py-2 rounded w-full">Add to bag</button>
    </div>
  );
};

export default RecommendedCard;
