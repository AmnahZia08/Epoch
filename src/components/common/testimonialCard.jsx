import React from 'react';

const TestimonialCard = ({ review, name, position, rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className='testimonial-item'>
      <ul
        className='d-flex justify-content-center align-items-center mx-auto'
        style={{ width: 'fit-content' }}
      >
        {[...Array(filledStars)].map((_, index) => (
          <li key={index}>
            <i className='ri-star-s-fill'></i>
          </li>
        ))}

        {halfStar && (
          <li>
            <i className='ri-star-half-s-fill'></i>
          </li>
        )}

        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <li key={index + filledStars + (halfStar ? 1 : 0)}>
            <i className='ri-star-line' style={{ fontSize: '0.9rem' }}></i>
          </li>
        ))}
      </ul>
      <p>{review}</p>
      <h4>{name}</h4>
      <span>{position}</span>
    </div>
  );
};

export default TestimonialCard;
