import React from 'react';

const UserCard = ({ name, email, city }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

export default UserCard;
