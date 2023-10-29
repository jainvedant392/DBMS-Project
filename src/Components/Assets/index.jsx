import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Assets = () => {
  const [data, setData] = useState(() => {
    const initData = {};
    for (let i = 0; i < 5; i++) {
      initData[`dataA${i}`] = null;
      initData[`dataB${i}`] = null;
      initData[`dataC${i}`] = null;
      initData[`dataD${i}`] = null;
      initData[`dataE${i}`] = null;
      initData[`dataF${i}`] = null;
      initData[`dataG${i}`] = null;
      initData[`dataH${i}`] = null;
      initData[`dataI${i}`] = null;
      initData[`dataJ${i}`] = null;
    }
    return initData;
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.dataA0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return null;
  }

  function handleClick() {
    alert('Added to Watchlist');
  }
  const handleMouseHover = (e) => {
    e.target.style.cursor = 'pointer';
  };

  return (
    <div className="container assets_container">
      <div className="heading row-0">
        {' '}
        <span className="col0">S No.</span>
        <span className="">Name</span>
        <span className="col2">Last Traded Price</span>
        <span className="col3">Open</span>
        <span className="col4">Regular Market Price</span>
        <span className="col5">Time</span>
        <span className="col6">WatchList</span>
      </div>

      <div className="row-1">
        <span className="col0">1</span>
        {data.dataA0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataA0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataA1 && (
          <span className="col2"> {JSON.stringify(data.dataA1)}</span>
        )}
        {data.dataA2 && (
          <span className="col3"> {JSON.stringify(data.dataA2)}</span>
        )}
        {data.dataA3 && (
          <span className="col4"> {JSON.stringify(data.dataA3)}</span>
        )}
        {data.dataA4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataA4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-2">
        <span className="col0">2</span>
        {data.dataB0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataB0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataB1 && (
          <span className="col2"> {JSON.stringify(data.dataB1)}</span>
        )}
        {data.dataB2 && (
          <span className="col3"> {JSON.stringify(data.dataB2)}</span>
        )}
        {data.dataB3 && (
          <span className="col4"> {JSON.stringify(data.dataB3)}</span>
        )}
        {data.dataB4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataB4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>

      <div className="row-3">
        <span className="col0">3</span>

        {data.dataC0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataC0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataC1 && (
          <span className="col2"> {JSON.stringify(data.dataC1)}</span>
        )}
        {data.dataC2 && (
          <span className="col3"> {JSON.stringify(data.dataC2)}</span>
        )}
        {data.dataC3 && (
          <span className="col4"> {JSON.stringify(data.dataC3)}</span>
        )}
        {data.dataC4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataC4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-4">
        <span className="col0">4</span>
        {data.dataD0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataD0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataD1 && (
          <span className="col2"> {JSON.stringify(data.dataD1)}</span>
        )}
        {data.dataD2 && (
          <span className="col3"> {JSON.stringify(data.dataD2)}</span>
        )}
        {data.dataD3 && (
          <span className="col4"> {JSON.stringify(data.dataD3)}</span>
        )}
        {data.dataD4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataD4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-5">
        <span className="col0">5</span>
        {data.dataE0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataE0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataE1 && (
          <span className="col2"> {JSON.stringify(data.dataE1)}</span>
        )}
        {data.dataE2 && (
          <span className="col3"> {JSON.stringify(data.dataE2)}</span>
        )}
        {data.dataE3 && (
          <span className="col4"> {JSON.stringify(data.dataE3)}</span>
        )}
        {data.dataE4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataE4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-6">
        <span className="col0">6</span>
        {data.dataF0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataF0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataF1 && (
          <span className="col2"> {JSON.stringify(data.dataF1)}</span>
        )}
        {data.dataF2 && (
          <span className="col3"> {JSON.stringify(data.dataF2)}</span>
        )}
        {data.dataF3 && (
          <span className="col4"> {JSON.stringify(data.dataF3)}</span>
        )}
        {data.dataF4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataF4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-7">
        <span className="col0">7</span>
        {data.dataG0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataG0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataG1 && (
          <span className="col2"> {JSON.stringify(data.dataG1)}</span>
        )}
        {data.dataG2 && (
          <span className="col3"> {JSON.stringify(data.dataG2)}</span>
        )}
        {data.dataG3 && (
          <span className="col4"> {JSON.stringify(data.dataG3)}</span>
        )}
        {data.dataG4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataG4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-8">
        <span className="col0">8</span>
        {data.dataH0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataH0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataH1 && (
          <span className="col2"> {JSON.stringify(data.dataH1)}</span>
        )}
        {data.dataH2 && (
          <span className="col3"> {JSON.stringify(data.dataH2)}</span>
        )}
        {data.dataH3 && (
          <span className="col4"> {JSON.stringify(data.dataH3)}</span>
        )}
        {data.dataH4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataH4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-9">
        <span className="col0">9</span>
        {data.dataI0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataI0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataI1 && (
          <span className="col2"> {JSON.stringify(data.dataI1)}</span>
        )}
        {data.dataI2 && (
          <span className="col3"> {JSON.stringify(data.dataI2)}</span>
        )}
        {data.dataI3 && (
          <span className="col4"> {JSON.stringify(data.dataI3)}</span>
        )}
        {data.dataI4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataI4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
      <div className="row-10">
        <span className="col0">10</span>
        {data.dataJ0 && (
          <span className="">
            {' '}
            {JSON.stringify(data.dataJ0, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        {data.dataJ1 && (
          <span className="col2"> {JSON.stringify(data.dataJ1)}</span>
        )}
        {data.dataJ2 && (
          <span className="col3"> {JSON.stringify(data.dataJ2)}</span>
        )}
        {data.dataJ3 && (
          <span className="col4"> {JSON.stringify(data.dataJ3)}</span>
        )}
        {data.dataJ4 && (
          <span className="col5">
            {' '}
            {JSON.stringify(data.dataJ4, null, 2).replace(
              /^"(.+(?="$))"$/,
              '$1'
            )}
          </span>
        )}
        <span
          className="col6"
          onClick={handleClick}
          onMouseOver={handleMouseHover}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default Assets;
