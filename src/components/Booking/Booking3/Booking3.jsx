// CombinedComponent.js
import React, { useState } from 'react';
import './Booking3.scss';
import car2 from './img/car2.png';
import car3 from './img/car3.png';
import { Link } from 'react-router-dom';

const CombinedComponent = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const model = 
    {
      id: 1,
      name: 'Gas Model',
      price: '$ 1000',
      imageUrl: car2,
      passengers: 5,
      rating: 4.5
    };
   


const handleRatingChange = (rating) => {
  setSelectedRating(rating);
};

return (
  <div className="combined-container">
    <div className="rating-filter">
      <div className="rating-filter-header">
        <p>Cart Star</p>
      </div>
      <div className="rating-options">
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating} className="rating-option">
            <input
              type="checkbox"
              checked={selectedRating === rating}
              onChange={() => handleRatingChange(rating)}
            />
            <span className="star">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
          </label>
        ))}
      </div>
    </div>
    <div className="cart-model">
      <div key={model.id} className="cart-card">
        <img src={model.imageUrl} alt={model.name} className="cart-image" />
        <div className="cart-details">
          <div className="cart-passengers">{model.passengers} Passengers</div>
          <div className="cart-name">{model.name}</div>
          <div className="cart-price">Price {model.price}</div>
          <Link to='/Checkout'>
            <button className="continue-button">Continue</button>
            </Link>
        </div>
      </div>
    </div>
  </div>
);
};

export default CombinedComponent;
