import React from 'react';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="footer_container">
      <div className="landing_footer">
        <Link to="/" className="heading" onClick={scrollToTop}>
          Wa<span className="ll">ll</span>et<span className="X">X</span>
        </Link>
        <hr />
        <p className="warning">Risk Warning</p>
        <p className="description">
          Cryptocurrencies and their derivatives are dynamic financial products,
          known for their volatility and investment risks. While WalletX is
          committed to providing user-friendly trading tools, it's crucial to
          recognize that trading in digital assets carries significant market
          risk, with potential for partial or total loss of funds. Prior to
          using WalletX services, carefully assess your financial situation and
          the associated risks. You are accountable for any resulting losses,
          and it is advisable to seek advice from professionals before
          investing. By accessing WalletX services, you acknowledge and accept
          all terms and conditions outlined in the WalletX Terms of Use and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LandingFooter;
