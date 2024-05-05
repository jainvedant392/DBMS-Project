import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
axios.defaults.withCredentials = true;
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
        'http://localhost:3000/login',
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
    <div className="formpage">
      <div className="formContainer" style={{ marginTop: '12vh' }}>
        <div className="form-header">Log In</div>
        <div
          className="login-form"
          style={{ paddingTop: '6vh', paddingBottom: '6vh' }}
        >
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
              {usernameError && (
                <div className="error-text">{usernameError}</div>
              )}
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
              {passwordError && (
                <div className="error-text">{passwordError}</div>
              )}
            </div>
            <div className="buttonContainer">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
        <div className="form-footer">
          <div>Dont have an account? &nbsp;</div>
          <div>
            <Link to="/signup" className="navigator_link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
