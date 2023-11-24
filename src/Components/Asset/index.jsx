import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export const Asset = ({ asset }) => {
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
    <div className="asset">
      <div className="asset_data">
        <p className="asset_name">
          <span>{asset.name}</span> <span>{asset.symbol}</span>
        </p>
        <p className="asset_price">{asset.price}</p>
        <p>
          <span>24Hour Vol Change:</span> <span>{asset.volChange}</span>
        </p>
        <p>
          <span>Circulating Supply:</span> <span>{asset.circSupply}</span>
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
                    (index) => {
                      if (index === 0) {
                        return asset.price;
                      }
                      return Math.floor(Math.random() * 50000);
                    }
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
};

Asset.propTypes = {
  asset: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.string,
    volChange: PropTypes.string,
    circSupply: PropTypes.string,
    totalSupply: PropTypes.string,
    maxSupply: PropTypes.string,
  }).isRequired,
};
