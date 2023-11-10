import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  Chart.register(CategoryScale);
  const [range, setRange] = useState('1D');

  const getHour = (e) => {
    const date = new Date();
    date.setHours(date.getHours() - e);
    return date.getHours() + ':00' + (date.getHours() >= 12 ? ' PM' : ' AM');
  };

  const getDate = (e) => {
    const date = new Date();
    date.setDate(date.getDate() - e);
    return date.getDate();
  };

  const getDay = (e) => {
    const date = new Date();
    const day = (date.getDay() + e) % 7;
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return dayNames[day];
  };

  const getMonth = (e) => {
    const date = new Date();
    const month = (date.getMonth() + e) % 12;
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return monthNames[month];
  };

  const getYear = (e) => {
    const date = new Date();
    const year = date.getFullYear() - e;
    return year;
  };

  const labels = {
    '1D': Array.from({ length: 24 }, (_, i) => getHour(i)),
    '1W': Array.from({ length: 7 }, (_, i) => getDay(i)),
    '1M': Array.from({ length: 31 }, (_, i) => getDate(i)),
    '1Y': Array.from({ length: 12 }, (_, i) => getMonth(i)),
    '10Y': Array.from({ length: 10 }, (_, i) => getYear(i)),
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        labels: labels[range],
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
    },
  };

  return (
    <>
      <div className="container">
        <h1>Dashboard</h1>
        {assetList.map((asset, index) => {
          return (
            <div className="asset" key={index}>
              <div className="asset_data">
                <p className="asset_name">
                  <span>{asset.name}</span> <span>{asset.symbol}</span>
                </p>
                <p className="asset_price">{asset.price}</p>
                <p>
                  <span>24Hour Vol Change:</span> <span>{asset.volChange}</span>
                </p>
                <p>
                  <span>Circulating Supply:</span>{' '}
                  <span>{asset.circSupply}</span>
                </p>
                <p>
                  <span>Total Supply:</span> <span>{asset.totalSupply}</span>
                </p>
                <p>
                  <span>Max Supply:</span> <span>{asset.maxSupply}</span>
                </p>
              </div>
              <div className="asset_chart">
                <div className="chart_select">
                  <div>
                    <p>Change({range})</p>
                  </div>
                  <select
                    onChange={(e) => setRange(e.target.value)}
                    className="asset_stats"
                  >
                    <option value="1D">Day</option>
                    <option value="1W">Week</option>
                    <option value="1M">Month</option>
                    <option value="1Y">Year</option>
                    <option value="10Y">Decade</option>
                  </select>
                </div>
                {
                  <Line
                    datasetIdKey="id"
                    data={{
                      labels: [1, 2, 3, 4, 5],
                      datasets: [
                        {
                          id: 1,
                          label: 'Current Price',
                          data: Array.from(
                            { length: labels[range].length },
                            () => Math.floor(Math.random() * 1000)
                          ),
                          radius: 2,
                          backgroundColor: '#16C784',
                          borderColor: '#16C784',
                          fill: {
                            target: 'origin',
                            above: 'rgba(22, 199, 132,0.2)',
                            below: '#000000',
                          },
                        },
                      ],
                    }}
                    options={options}
                  />
                }
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Account;
