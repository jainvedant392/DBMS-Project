import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing_header">
        <div className="header_left">
          <p className="tagline">Your Gateway to Digital Wealth Management</p>
          <p className="subtagline">Track Analyze and Stay Informed</p>
          <p className="description">
            All-in-one solution for managing your valuable online assets, from{' '}
            <span>Cryptocurrencies</span> to <span>NFTs</span>
          </p>
          <button onClick={() => navigate('/signup')}>Sign Up Now</button>
        </div>
        <div className="header_right"></div>
      </div>
    </>
  );
};

export default LandingHeader;
