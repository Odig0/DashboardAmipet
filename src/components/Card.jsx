import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '16px',
      width: '300px',
      textAlign: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      margin: '10px'
    }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h2 style={{ marginTop: '12px' }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
