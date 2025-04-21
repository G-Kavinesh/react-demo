import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Hello Nicole 👋</h1>
      <p>This is a working demo of Axios + Props + Component Rendering!</p>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))
      )}
    </div>
  );
};

export default App;
