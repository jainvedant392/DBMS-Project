import React, { useEffect } from 'react';
import { Asset } from '../Asset';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Preloader from '../Preloader';

const assetList = [
  {
    name: 'Apple Inc',
    symbol: 'APPL',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'American Express',
    symbol: 'AXP',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'BlackRock Inc',
    symbol: 'BLK',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'Microsoft',
    symbol: 'MSFT',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'Tesla',
    symbol: 'TSLA',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'Amazon',
    symbol: 'AMZN',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'Alphabet Inc',
    symbol: 'GOOGL',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
  {
    name: 'Nike',
    symbol: 'NKE',
    price: 'xxxx',
    volChange: 'xxxx',
    circSupply: 'xxxx',
    totalSupply: 'xxxx',
    maxSupply: 'xxxx',
  },
];

const Account = () => {
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      let response = await axios.get(
        'https://walletx-backend.onrender.com/info'
      );
      console.log(response.data);
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

  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="container">
          <h1>Dashboard</h1>
          {assetList.map((asset, index) => {
            return <Asset asset={asset} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default Account;
