import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
  const handleClick = () => {
    alert('Added to Watchlist');
  };
  const handleMouseHover = (e) => {
    e.target.style.cursor = 'pointer';
  };

  const Key = '51f791c132msh21269cb69c6ce76p1e8498jsnbb6dde117c76';
  const Host = 'yahoo-finance15.p.rapidapi.com';

  let a = [[], [], [], [], [], [], [], [], [], []];
  const combinedData = {},
    combinedData1 = {},
    combinedData2 = {},
    combinedData3 = {},
    combinedData4 = {},
    combinedData5 = {},
    combinedData6 = {},
    combinedData7 = {},
    combinedData8 = {},
    combinedData9 = {};
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState({});
  const [data6, setData6] = useState({});
  const [data7, setData7] = useState({});
  const [data8, setData8] = useState({});
  const [data9, setData9] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const options01 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AAPL/15m', // Apple Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      const options01_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/AAPL',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options01.url, {
          params: options01.params,
          headers: options01.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);
        a[0][2] = lastElement.open;
        console.log(response.data.meta.regularMarketPrice);
        a[0][3] = response.data.meta.regularMarketPrice;
        console.log(response.data.meta.chartPreviousClose);
        a[0][1] = response.data.meta.chartPreviousClose;

        const companyResponse = await axios.get(options01_1.url, {
          headers: options01_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        a[0][0] = companyResponse.data.body[0].name;
        console.log(companyResponse.data.meta.processedTime);
        a[0][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }

      for (let i = 0; i < 5; i++) {
        combinedData[`dataA${i}`] = a[0][i] !== undefined ? a[0][i] : null;
      }
      setData(combinedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      const options02 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AXP/1d', //American express
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options02_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/AXP',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      try {
        const response = await axios.get(options02.url, {
          params: options02.params,
          headers: options02.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);
        a[1][2] = lastElement.open;
        console.log(response.data.meta.regularMarketPrice);
        a[1][3] = response.data.meta.regularMarketPrice;
        console.log(response.data.meta.chartPreviousClose);
        a[1][1] = response.data.meta.chartPreviousClose;

        const companyResponse = await axios.get(options02_1.url, {
          headers: options02_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        a[1][0] = companyResponse.data.body[0].name;
        console.log(companyResponse.data.meta.processedTime);
        a[1][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData1[`dataB${i}`] = a[1][i] !== undefined ? a[1][i] : null;
      }
      setData1(combinedData1);
    };

    fetchData1();
  }, []);
  useEffect(() => {
    const fetchData2 = async () => {
      const options03 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/BLK/1d', //Blackrock Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options03_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/BLK',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      try {
        const response = await axios.get(options03.url, {
          params: options03.params,
          headers: options03.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);
        a[2][2] = lastElement.open;
        a[2][3] = response.data.meta.regularMarketPrice;
        a[2][1] = response.data.meta.chartPreviousClose;
        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options03_1.url, {
          headers: options03_1.headers,
        });
        a[2][0] = companyResponse.data.body[0].name;
        a[2][4] = response.data.meta.processedTime;
        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData2[`dataC${i}`] = a[2][i] !== undefined ? a[2][i] : null;
      }
      setData2(combinedData2);
    };

    fetchData2();
  }, []);

  useEffect(() => {
    const fetchData3 = async () => {
      const options04 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/MSFT/1d', //Microsoft
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options04_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/MSFT',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      try {
        const response = await axios.get(options04.url, {
          params: options04.params,
          headers: options04.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);
        a[3][2] = lastElement.open;
        a[3][3] = response.data.meta.regularMarketPrice;
        a[3][1] = response.data.meta.chartPreviousClose;
        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options04_1.url, {
          headers: options04_1.headers,
        });
        a[3][0] = companyResponse.data.body[0].name;
        a[3][4] = response.data.meta.processedTime;
        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData3[`dataD${i}`] = a[3][i] !== undefined ? a[3][i] : null;
      }
      setData3(combinedData3);
    };

    fetchData3();
  }, []);
  useEffect(() => {
    const fetchData4 = async () => {
      const options05 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/TSLA/1d', //Tesla, Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options05_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/TSLA',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options05.url, {
          params: options05.params,
          headers: options05.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options05_1.url, {
          headers: options05_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
        a[4][2] = lastElement.open;
        a[4][3] = response.data.meta.regularMarketPrice;
        a[4][1] = response.data.meta.chartPreviousClose;
        a[4][0] = companyResponse.data.body[0].name;
        a[4][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData4[`dataE${i}`] = a[4][i] !== undefined ? a[4][i] : null;
      }
      setData4(combinedData4);
    };
    fetchData4();
  }, []);
  useEffect(() => {
    const fetchData5 = async () => {
      const options06 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AMZN/1d', //Amazon.com, Inc
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options06_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/AMZN',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options06.url, {
          params: options06.params,
          headers: options06.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options06_1.url, {
          headers: options06_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
        a[5][2] = lastElement.open;
        a[5][3] = response.data.meta.regularMarketPrice;
        a[5][1] = response.data.meta.chartPreviousClose;
        a[5][0] = companyResponse.data.body[0].name;
        a[5][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData5[`dataF${i}`] = a[5][i] !== undefined ? a[5][i] : null;
      }
      setData5(combinedData5);
    };
    fetchData5();
  }, []);
  useEffect(() => {
    const fetchData6 = async () => {
      const options07 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/GOOG/1d', //Alphabet Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options07_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/GOOG',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options07.url, {
          params: options07.params,
          headers: options07.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options07_1.url, {
          headers: options07_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
        a[6][2] = lastElement.open;
        a[6][3] = response.data.meta.regularMarketPrice;
        a[6][1] = response.data.meta.chartPreviousClose;
        a[6][0] = companyResponse.data.body[0].name;
        a[6][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData6[`dataG${i}`] = a[6][i] !== undefined ? a[6][i] : null;
      }
      setData6(combinedData6);
    };
    fetchData6();
  }, []);
  useEffect(() => {
    const fetchData7 = async () => {
      const options08 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/NKE/1d', //NIKE, Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options08_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/NKE',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options08.url, {
          params: options08.params,
          headers: options08.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options08_1.url, {
          headers: options08_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
        a[7][2] = lastElement.open;
        a[7][3] = response.data.meta.regularMarketPrice;
        a[7][1] = response.data.meta.chartPreviousClose;
        a[7][0] = companyResponse.data.body[0].name;
        a[7][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData7[`dataH${i}`] = a[7][i] !== undefined ? a[7][i] : null;
      }
      setData7(combinedData7);
    };
    fetchData7();
  }, []);
  useEffect(() => {
    const fetchData8 = async () => {
      const options09 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/UBER/1d', //Uber Technologies, Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options09_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/UBER',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options09.url, {
          params: options09.params,
          headers: options09.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options09_1.url, {
          headers: options09_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
        a[8][2] = lastElement.open;
        a[8][3] = response.data.meta.regularMarketPrice;
        a[8][1] = response.data.meta.chartPreviousClose;
        a[8][0] = companyResponse.data.body[0].name;
        a[8][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData8[`dataI${i}`] = a[8][i] !== undefined ? a[8][i] : null;
      }
      setData8(combinedData8);
    };
    fetchData8();
  }, []);
  useEffect(() => {
    const fetchData9 = async () => {
      const options10 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/NVDA/1d', // Apple Inc.
        params: {
          diffandsplits: 'false',
        },
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };
      const options10_1 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/NVDA',
        headers: {
          'X-RapidAPI-Key': Key,
          'X-RapidAPI-Host': Host,
        },
      };

      try {
        const response = await axios.get(options10.url, {
          params: options10.params,
          headers: options10.headers,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options10_1.url, {
          headers: options10_1.headers,
        });

        console.log(companyResponse.data.body[0].name);
        console.log(companyResponse.data.meta.processedTime);
        a[9][2] = lastElement.open;
        a[9][3] = response.data.meta.regularMarketPrice;
        a[9][1] = response.data.meta.chartPreviousClose;
        a[9][0] = companyResponse.data.body[0].name;
        a[9][4] = response.data.meta.processedTime;
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData9[`dataJ${i}`] = a[9][i] !== undefined ? a[9][i] : null;
      }
      setData9(combinedData9);
    };
    fetchData9();
  }, []);

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
          <span className=""> {JSON.stringify(data.dataA0)}</span>
        )}
        {`${data.dataA1}` && (
          <span className="col2"> {JSON.stringify(data.dataA1)}</span>
        )}
        {`${data.dataA2}` && (
          <span className="col3"> {JSON.stringify(data.dataA2)}</span>
        )}
        {`${data.dataA3}` && (
          <span className="col4"> {JSON.stringify(data.dataA3)}</span>
        )}
        {`${data.dataA4}` && (
          <span className="col5"> {JSON.stringify(data.dataA4)}</span>
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
        {data1.dataB0 && (
          <span className=""> {JSON.stringify(data1.dataB0)}</span>
        )}
        {data1.dataB1 && (
          <span className="col2"> {JSON.stringify(data1.dataB1)}</span>
        )}
        {data1.dataB2 && (
          <span className="col3"> {JSON.stringify(data1.dataB2)}</span>
        )}
        {data1.dataB3 && (
          <span className="col4"> {JSON.stringify(data1.dataB3)}</span>
        )}
        {data1.dataB4 && (
          <span className="col5"> {JSON.stringify(data1.dataB4)}</span>
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

        {data2.dataC0 && (
          <span className=""> {JSON.stringify(data2.dataC0)}</span>
        )}
        {data2.dataC1 && (
          <span className="col2"> {JSON.stringify(data2.dataC1)}</span>
        )}
        {data2.dataC2 && (
          <span className="col3"> {JSON.stringify(data2.dataC2)}</span>
        )}
        {data2.dataC3 && (
          <span className="col4"> {JSON.stringify(data2.dataC3)}</span>
        )}
        {data2.dataC4 && (
          <span className="col5"> {JSON.stringify(data2.dataC4)}</span>
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

        {data3.dataD0 && (
          <span className=""> {JSON.stringify(data3.dataD0)}</span>
        )}
        {data3.dataD1 && (
          <span className="col2"> {JSON.stringify(data3.dataD1)}</span>
        )}
        {data3.dataD2 && (
          <span className="col3"> {JSON.stringify(data3.dataD2)}</span>
        )}
        {data3.dataD3 && (
          <span className="col4"> {JSON.stringify(data3.dataD3)}</span>
        )}
        {data3.dataD4 && (
          <span className="col5"> {JSON.stringify(data3.dataD4)}</span>
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

        {data4.dataE0 && (
          <span className=""> {JSON.stringify(data4.dataE0)}</span>
        )}
        {data4.dataE1 && (
          <span className="col2"> {JSON.stringify(data4.dataE1)}</span>
        )}
        {data4.dataE2 && (
          <span className="col3"> {JSON.stringify(data4.dataE2)}</span>
        )}
        {data4.dataE3 && (
          <span className="col4"> {JSON.stringify(data4.dataE3)}</span>
        )}
        {data4.dataE4 && (
          <span className="col5"> {JSON.stringify(data4.dataE4)}</span>
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

        {data5.dataF0 && (
          <span className=""> {JSON.stringify(data5.dataF0)}</span>
        )}
        {data5.dataF1 && (
          <span className="col2"> {JSON.stringify(data5.dataF1)}</span>
        )}
        {data5.dataF2 && (
          <span className="col3"> {JSON.stringify(data5.dataF2)}</span>
        )}
        {data5.dataF3 && (
          <span className="col4"> {JSON.stringify(data5.dataF3)}</span>
        )}
        {data5.dataF4 && (
          <span className="col5"> {JSON.stringify(data5.dataF4)}</span>
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

        {data6.dataG0 && (
          <span className=""> {JSON.stringify(data6.dataG0)}</span>
        )}
        {data6.dataG1 && (
          <span className="col2"> {JSON.stringify(data6.dataG1)}</span>
        )}
        {data6.dataG2 && (
          <span className="col3"> {JSON.stringify(data6.dataG2)}</span>
        )}
        {data6.dataG3 && (
          <span className="col4"> {JSON.stringify(data6.dataG3)}</span>
        )}
        {data6.dataG4 && (
          <span className="col5"> {JSON.stringify(data6.dataG4)}</span>
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

        {data7.dataH0 && (
          <span className=""> {JSON.stringify(data7.dataH0)}</span>
        )}
        {data7.dataH1 && (
          <span className="col2"> {JSON.stringify(data7.dataH1)}</span>
        )}
        {data7.dataH2 && (
          <span className="col3"> {JSON.stringify(data7.dataH2)}</span>
        )}
        {data7.dataH3 && (
          <span className="col4"> {JSON.stringify(data7.dataH3)}</span>
        )}
        {data7.dataH4 && (
          <span className="col5"> {JSON.stringify(data7.dataH4)}</span>
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

        {data8.dataI0 && (
          <span className=""> {JSON.stringify(data8.dataI0)}</span>
        )}
        {data8.dataI1 && (
          <span className="col2"> {JSON.stringify(data8.dataI1)}</span>
        )}
        {data8.dataI2 && (
          <span className="col3"> {JSON.stringify(data8.dataI2)}</span>
        )}
        {data8.dataI3 && (
          <span className="col4"> {JSON.stringify(data8.dataI3)}</span>
        )}
        {data8.dataE4 && (
          <span className="col5"> {JSON.stringify(data4.dataI4)}</span>
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

        {data9.dataJ0 && (
          <span className=""> {JSON.stringify(data9.dataJ0)}</span>
        )}
        {data9.dataJ1 && (
          <span className="col2"> {JSON.stringify(data9.dataJ1)}</span>
        )}
        {data9.dataJ2 && (
          <span className="col3"> {JSON.stringify(data9.dataJ2)}</span>
        )}
        {data9.dataJ3 && (
          <span className="col4"> {JSON.stringify(data9.dataJ3)}</span>
        )}
        {data9.dataJ4 && (
          <span className="col5"> {JSON.stringify(data9.dataJ4)}</span>
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

export default Api;
