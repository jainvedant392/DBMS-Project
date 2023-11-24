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

      <div className="landing_body">
        <div className="body_component">
          <div className="text">
            <p className="heading">Comprehensive Asset Tracking</p>
            <p className="description">
              Easily categorize and manage all your cryptocurrencies and NFTs,
              ensuring you have a clear overview of your digital wealth.
            </p>
          </div>
          <div className="image">
            <img src="src/assets/landing_body2.jpeg" alt="" />
          </div>
        </div>
        <div className="body_component">
          <div className="image">
            <img src="src/assets/landing_body3.jpeg" alt="" />
          </div>
          <div className="text">
            <p className="heading">In-depth Asset Profiles</p>
            <p className="description">
              Access detailed information about each asset, from real-time
              market prices to historical performance, helping you make
              strategic investment choices.
            </p>
          </div>
        </div>
        <div className="body_component">
          <div className="text">
            <p className="heading">Market Statistics</p>
            <p className="description">
              Access comprehensive statistics on stock markets to stay ahead of
              financial trends and make wise investment decisions.
            </p>
          </div>
          <div className="image">
            <img src="src/assets/landing_body1.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
