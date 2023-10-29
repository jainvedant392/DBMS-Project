import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Testing = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      let response = await axios.get(
        'https://walletx-backend.onrender.com/info'
      );
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.error('Unauthorized: You are not logged in.');
        navigate('/login');
      } else {
        console.error(err);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Testing</h1>
      <ul>
        {Array.isArray(data) &&
          data &&
          data.map((user) => (
            <li key={user.user_id}>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Testing;
