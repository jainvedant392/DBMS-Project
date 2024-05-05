import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
    email: '',
  });
  const [usernameError, setUserNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'email') {
      setEmailError('');
    } else if (name === 'password') {
      setPasswordError('');
    } else if (name === 'username') {
      setUserNameError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/signup',
        formData
      );
      console.log(response.data);
      alert('New user created');
      setFormData({
        username: '',
        password: '',
        email: '',
      });
      setEmailError('');
      setPasswordError('');
      setUserNameError('');
    } catch (err) {
      // console.log(err.response.data.errors);
      setUserNameError(err.response.data.errors.username);
      setEmailError(err.response.data.errors.email);
      setPasswordError(err.response.data.errors.password);
    }
  };

  return (
    <>
      <div className="formpage">
        <div className="formContainer">
          <div className="form-header">Sign Up</div>
          <div className="signup-form">
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
                <label htmlFor="password">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {emailError && <div className="error-text">{emailError}</div>}
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
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="form-footer">
            <div>Already have an account? &nbsp;</div>
            <div>
              <Link to="/login" className="navigator_link">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
