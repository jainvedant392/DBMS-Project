import React from 'react';
import '../Styles/index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = React.useState(false);
  const navClick = () => {
    setNavOpen((prev) => !prev);
  };
  const LogOut = async () => {
    try {
      let response = await axios.get(
        'https://walletx-backend.onrender.com/logOut'
      );
      alert(response.data);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          WalletX
        </Link>
        <div className={navOpen ? 'navbar_open' : 'navbar'}>
          <div className="nav_hamburger" onClick={navClick}>
            {navOpen ? 'Cross' : 'Bars'}
          </div>
          <div className={navOpen ? 'navMenu_open' : 'navMenu_closed'}>
            <Link to="/account" className="nav-link nav-account">
              Account
            </Link>
            <Link to="/market" className="nav-link nav-market">
              Market
            </Link>
            <Link to="/wallet" className="nav-link nav-wallet">
              Wallet
            </Link>
            <Link to="/login" className="nav-link nav-login">
              Log In
            </Link>
            <Link to="/signup" className="nav-link nav-signup">
              Sign Up
            </Link>
            <Link to="/testing" className="nav-link nav-testing">
              Testing
            </Link>
            {/* For Testingn of Protection Of Routes */}
            <Link to="/api" className="nav-link nav-testing">
              API
            </Link>
            <button onClick={LogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
