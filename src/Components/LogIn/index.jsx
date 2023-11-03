import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = false;
const LogIn = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const [usernameError, setUserNameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password') {
      setPasswordError('');
    } else if (name === 'username') {
      setUserNameError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://walletx-backend.onrender.com/login',
        formData
      );
      console.log(response.data);
      alert('Logged in successfully');
      setFormData({
        username: '',
        password: '',
      });
      setPasswordError('');
      setUserNameError('');
      navigate('/testing');
    } catch (err) {
      console.log(err.response.data.errors);
      setUserNameError(err.response.data.errors.username);
      setPasswordError(err.response.data.errors.password);
    }
  };

  return (
    <div className="container">
      <div className="signup-form">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {usernameError && <div className="error-text">{usernameError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {passwordError && <div className="error-text">{passwordError}</div>}
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
