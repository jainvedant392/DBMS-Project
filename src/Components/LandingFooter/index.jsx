import React from 'react';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  return (
    <div className="footer_container">
      <div className="landing_footer">
        <Link to="/" className="heading">
          Wa<span className="ll">ll</span>et<span className="X">X</span>
        </Link>
        <hr />
        <p className="warning">Risk Warning</p>
        <p className="description">
          Cryptocurrencies and their derivatives are innovative financial
          products with great volatility and high investment risks. Although
          BingX is committed to providing users with easy-to-use trading tools,
          trading itself is still a highly sophisticated field. Trading digital
          assets and their derivatives are subject to high market risk and price
          volatility and may result in partial or total loss of account funds.
          You must carefully consider and exercise clear judgment to evaluate
          your financial situation and the aforementioned risks before using
          BingX Services. You shall be responsible for all losses arising
          therefrom. If necessary, please consult relevant professionals to make
          informed decisions before investing. By accessing, downloading, using
          or clicking on "I agree" to accept any BingX Services provided by
          BingX, you agree that you have read, understood and accepted all of
          the terms and conditions stipulated in BingX Terms of Use as well as
          our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LandingFooter;
