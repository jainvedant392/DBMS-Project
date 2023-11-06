import React, { Fragment } from 'react';
import '../Styles/index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function NavBar() {
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
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Wa<span className="ll">ll</span>et<span className="X">X</span>
          </Link>
          <div className={navOpen ? 'navbar_open' : 'navbar'}>
            <div className="nav_hamburger" onClick={navClick}>
              {navOpen ? (
                <AiOutlineClose
                  className="AiOutlineClose"
                  size="25px"
                  color="white"
                />
              ) : (
                <RxHamburgerMenu
                  className="RxHamburgerMenu"
                  size="25px"
                  color="white"
                />
              )}
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
              <Link to="/testing" className="nav-link nav-testing">
                Testing
              </Link>
              {/* For Testing of Protection Of Routes */}
              <Link to="/api" className="nav-link nav-testing">
                API
              </Link>
              <Link to="/watchlist" className="nav-link nav-watchlist">
                WatchList
              </Link>
              <Link to="/login" className="nav-link nav-login">
                {navOpen ? (
                  'Log In'
                ) : (
                  <button className="login_btn">Log In</button>
                )}
              </Link>
              <Link to="/signup" className="nav-link nav-signup">
                {navOpen ? (
                  'Sign Up'
                ) : (
                  <button className="signup_btn">Sign Up</button>
                )}
              </Link>
              <button className="logout_btn" onClick={LogOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
