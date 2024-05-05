import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Api = () => {
  const navigate = useNavigate();
  const handleMouseHover = (e) => {
    e.target.style.cursor = 'pointer';
  };
  const tickerName = {
    'Apple Inc.': 'AAPL',
    'American Express Company': 'AXP',
    'BlackRock, Inc.': 'BLK',
    'Microsoft Corporation': 'MSFT',
    'Tesla, Inc.': 'TSLA',
    'Amazon.com, Inc.': 'AMZN',
    'Alphabet Inc.': 'GOOG',
    'NIKE, Inc.': 'NKE',
    'Uber Technologies, Inc.': 'UBER',
    'NVIDIA Corporation': 'NVDA',
    ETHUSDT: 'ETHUSDT',
    BTCUSDT: 'BTCUSDT',
    DOGEUSDT: 'DOGEUSDT',
    MATICUSDT: 'MATICUSDT',
    XRPUSDT: 'XRPUSDT',
    BNBUSDT: 'BNBUSDT',
    LINAUSDT: 'LINAUSDT',
    LUNAUSDT: 'LUNAUSDT',
    LINKUSDT: 'LINKUSDT',
    ROSEUSDT: 'ROSEUSDT',
  };
  const toAdd = async (x) => {
    if (tickerName[x.trim()]) {
      try {
        await axios.post('http://localhost:3000/watchlist', {
          asset_name: x,
          asset_id: tickerName[x.trim()],
        });
        alert('Added to watchlist');
      } catch (err) {
        if (err.response && err.response.status === 401) {
          console.error('Unauthorized: You are not logged in.');
          navigate('/login');
        } else if (err.response && err.response.status === 400) {
          alert('Already added to watchlist');
        }
      }
      console.log('Added to watchlist');
      console.log(tickerName[x]);
    } else {
      console.error(`Company name not found in tickerName object: ${x}`);
    }
  };

  //'c46fd9bc6fmshc85441129815171p1477a5jsn819d06260da1'
  const Key = 'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830';
  const Host = 'yahoo-finance15.p.rapidapi.com';

  let a = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  const combinedData0 = {},
    combinedData1 = {},
    combinedData2 = {},
    combinedData3 = {},
    combinedData4 = {},
    combinedData5 = {},
    combinedData6 = {},
    combinedData7 = {},
    combinedData8 = {},
    combinedData9 = {},
    combinedData10 = {},
    combinedData11 = {},
    combinedData12 = {},
    combinedData13 = {},
    combinedData14 = {},
    combinedData15 = {},
    combinedData16 = {},
    combinedData17 = {},
    combinedData18 = {},
    combinedData19 = {};

  const [data0, setData0] = useState({});
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState({});
  const [data6, setData6] = useState({});
  const [data7, setData7] = useState({});
  const [data8, setData8] = useState({});
  const [data9, setData9] = useState({});
  const [data10, setData10] = useState({});
  const [data11, setData11] = useState({});
  const [data12, setData12] = useState({});
  const [data13, setData13] = useState({});
  const [data14, setData14] = useState({});
  const [data15, setData15] = useState({});
  const [data16, setData16] = useState({});
  const [data17, setData17] = useState({});
  const [data18, setData18] = useState({});
  const [data19, setData19] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const options01 = {
        url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AAPL/1d', // Apple Inc.
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
          withCredentials: false,
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
          withCredentials: false,
        });

        console.log(companyResponse.data.body[0].name);
        a[0][0] = companyResponse.data.body[0].name;
        console.log(companyResponse.data.meta.processedTime);

        //fixing the time
        const timestamp = response.data.meta.processedTime;
        const date = new Date(timestamp);
        console.log(date);
        a[0][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }

      for (let i = 0; i < 5; i++) {
        combinedData0[`dataA${i}`] = a[0][i] !== undefined ? a[0][i] : null;
      }
      setData0(combinedData0);
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
          withCredentials: false,
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
          withCredentials: false,
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
          withCredentials: false,
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
          withCredentials: false,
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
          withCredentials: false,
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
          withCredentials: false,
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
          withCredentials: false,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options05_1.url, {
          headers: options05_1.headers,
          withCredentials: false,
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
          withCredentials: false,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options06_1.url, {
          headers: options06_1.headers,
          withCredentials: false,
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
          withCredentials: false,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options07_1.url, {
          headers: options07_1.headers,
          withCredentials: false,
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
          withCredentials: false,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options08_1.url, {
          headers: options08_1.headers,
          withCredentials: false,
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
          withCredentials: false,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options09_1.url, {
          headers: options09_1.headers,
          withCredentials: false,
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
          withCredentials: false,
        });

        const itemsArray = Object.values(response.data.body);
        const lastElement = itemsArray.slice(-1)[0];
        console.log('Open:', lastElement.open);

        console.log(response.data.meta.regularMarketPrice);

        console.log(response.data.meta.chartPreviousClose);

        const companyResponse = await axios.get(options10_1.url, {
          headers: options10_1.headers,
          withCredentials: false,
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

  useEffect(() => {
    const fetchData10 = async () => {
      const options10 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // BTCUSDT
        params: { symbol: 'BTCUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options10.url, {
          params: options10.params,
          headers: options10.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[10][0] = response.data.symbol;
        a[10][1] = response.data.prevClosePrice;
        a[10][2] = response.data.openPrice;
        a[10][3] = response.data.askPrice;
        a[10][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData10[`dataK${i}`] = a[10][i] !== undefined ? a[10][i] : null;
      }
      setData10(combinedData10);
    };
    fetchData10();
  }, []);

  useEffect(() => {
    const fetchData11 = async () => {
      const options11 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', //ETHUSDT
        params: { symbol: 'ETHUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options11.url, {
          params: options11.params,
          headers: options11.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[11][0] = response.data.symbol;
        a[11][1] = response.data.prevClosePrice;
        a[11][2] = response.data.openPrice;
        a[11][3] = response.data.askPrice;
        a[11][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData11[`dataL${i}`] = a[11][i] !== undefined ? a[11][i] : null;
      }
      setData11(combinedData11);
    };
    fetchData11();
  }, []);

  useEffect(() => {
    const fetchData12 = async () => {
      const options12 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // DOGEUSDT
        params: { symbol: 'DOGEUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options12.url, {
          params: options12.params,
          headers: options12.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[12][0] = response.data.symbol;
        a[12][1] = response.data.prevClosePrice;
        a[12][2] = response.data.openPrice;
        a[12][3] = response.data.askPrice;
        a[12][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData12[`dataM${i}`] = a[12][i] !== undefined ? a[12][i] : null;
      }
      setData12(combinedData12);
    };
    fetchData12();
  }, []);

  useEffect(() => {
    const fetchData13 = async () => {
      const options13 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // MATICUSDT
        params: { symbol: 'MATICUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options13.url, {
          params: options13.params,
          headers: options13.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[13][0] = response.data.symbol;
        a[13][1] = response.data.prevClosePrice;
        a[13][2] = response.data.openPrice;
        a[13][3] = response.data.askPrice;
        a[13][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData13[`dataN${i}`] = a[13][i] !== undefined ? a[13][i] : null;
      }
      setData13(combinedData13);
    };
    fetchData13();
  }, []);

  useEffect(() => {
    const fetchData14 = async () => {
      const options14 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', //XRPUSDT
        params: { symbol: 'XRPUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options14.url, {
          params: options14.params,
          headers: options14.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[14][0] = response.data.symbol;
        a[14][1] = response.data.prevClosePrice;
        a[14][2] = response.data.openPrice;
        a[14][3] = response.data.askPrice;
        a[14][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData14[`dataO${i}`] = a[14][i] !== undefined ? a[14][i] : null;
      }
      setData14(combinedData14);
    };
    fetchData14();
  }, []);

  useEffect(() => {
    const fetchData15 = async () => {
      const options15 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // BNBUSDT
        params: { symbol: 'BNBUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options15.url, {
          params: options15.params,
          headers: options15.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[15][0] = response.data.symbol;
        a[15][1] = response.data.prevClosePrice;
        a[15][2] = response.data.openPrice;
        a[15][3] = response.data.askPrice;
        a[15][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData15[`dataP${i}`] = a[15][i] !== undefined ? a[15][i] : null;
      }
      setData15(combinedData15);
    };
    fetchData15();
  }, []);

  useEffect(() => {
    const fetchData16 = async () => {
      const options16 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', //LINAUSDT'
        params: { symbol: 'LINAUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options16.url, {
          params: options16.params,
          headers: options16.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[16][0] = response.data.symbol;
        a[16][1] = response.data.prevClosePrice;
        a[16][2] = response.data.openPrice;
        a[16][3] = response.data.askPrice;
        a[16][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData16[`dataQ${i}`] = a[16][i] !== undefined ? a[16][i] : null;
      }
      setData16(combinedData16);
    };
    fetchData16();
  }, []);

  useEffect(() => {
    const fetchData17 = async () => {
      const options17 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // 'LUNAUSDT'
        params: { symbol: 'LUNAUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options17.url, {
          params: options17.params,
          headers: options17.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[17][0] = response.data.symbol;
        a[17][1] = response.data.prevClosePrice;
        a[17][2] = response.data.openPrice;
        a[17][3] = response.data.askPrice;
        a[17][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData17[`dataR${i}`] = a[17][i] !== undefined ? a[17][i] : null;
      }
      setData17(combinedData17);
    };
    fetchData17();
  }, []);

  useEffect(() => {
    const fetchData18 = async () => {
      const options18 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // 'LINKUSDT'
        params: { symbol: 'LINKUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options18.url, {
          params: options18.params,
          headers: options18.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[18][0] = response.data.symbol;
        a[18][1] = response.data.prevClosePrice;
        a[18][2] = response.data.openPrice;
        a[18][3] = response.data.askPrice;
        a[18][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData18[`dataS${i}`] = a[18][i] !== undefined ? a[18][i] : null;
      }
      setData18(combinedData18);
    };
    fetchData18();
  }, []);

  useEffect(() => {
    const fetchData19 = async () => {
      const options19 = {
        url: 'https://binance43.p.rapidapi.com/ticker/24hr', // BTCUSDT
        params: { symbol: 'ROSEUSDT' },
        headers: {
          'X-RapidAPI-Key':
            'f9b45eef3emsh649e7838f2789a2p111419jsnafe7a7a21830',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.get(options19.url, {
          params: options19.params,
          headers: options19.headers,
          withCredentials: false,
        });

        console.log(response.data.symbol);
        console.log(response.data.prevClosePrice);
        console.log(response.data.openPrice);
        console.log(response.data.askPrice);
        //fixing the time
        const timestamp = response.data.closeTime;
        const date = new Date(timestamp);
        console.log(date);

        a[19][0] = response.data.symbol;
        a[19][1] = response.data.prevClosePrice;
        a[19][2] = response.data.openPrice;
        a[19][3] = response.data.askPrice;
        a[19][4] = date.toLocaleString();
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < 5; i++) {
        combinedData19[`dataT${i}`] = a[19][i] !== undefined ? a[19][i] : null;
      }
      setData19(combinedData19);
    };
    fetchData19();
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
        <span className="col0">1.</span>
        {data0.dataA0 && <span className=""> {data0.dataA0}</span>}
        {data0.dataA1 && (
          <span className="col2"> {JSON.stringify(data0.dataA1)}</span>
        )}
        {data0.dataA2 && (
          <span className="col3"> {JSON.stringify(data0.dataA2)}</span>
        )}
        {data0.dataA3 && (
          <span className="col4"> {JSON.stringify(data0.dataA3)}</span>
        )}
        {data0.dataA4 && <span className="col5"> {data0.dataA4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data0.dataA0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-2">
        <span className="col0">2.</span>
        {data1.dataB0 && <span className=""> {data1.dataB0}</span>}
        {data1.dataB1 && (
          <span className="col2"> {JSON.stringify(data1.dataB1)}</span>
        )}
        {data1.dataB2 && (
          <span className="col3"> {JSON.stringify(data1.dataB2)}</span>
        )}
        {data1.dataB3 && (
          <span className="col4"> {JSON.stringify(data1.dataB3)}</span>
        )}
        {data1.dataB4 && <span className="col5"> {data1.dataB4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data1.dataB0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-3">
        <span className="col0">3.</span>

        {data2.dataC0 && <span className=""> {data2.dataC0}</span>}
        {data2.dataC1 && (
          <span className="col2"> {JSON.stringify(data2.dataC1)}</span>
        )}
        {data2.dataC2 && (
          <span className="col3"> {JSON.stringify(data2.dataC2)}</span>
        )}
        {data2.dataC3 && (
          <span className="col4"> {JSON.stringify(data2.dataC3)}</span>
        )}
        {data2.dataC4 && <span className="col5"> {data2.dataC4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data2.dataC0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-4">
        <span className="col0">4.</span>

        {data3.dataD0 && <span className=""> {data3.dataD0}</span>}
        {data3.dataD1 && (
          <span className="col2"> {JSON.stringify(data3.dataD1)}</span>
        )}
        {data3.dataD2 && (
          <span className="col3"> {JSON.stringify(data3.dataD2)}</span>
        )}
        {data3.dataD3 && <span className="col4"> {data3.dataD3}</span>}
        {data3.dataD4 && <span className="col5"> {data3.dataD4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data3.dataD0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-5">
        <span className="col0">5.</span>

        {data4.dataE0 && <span className=""> {data4.dataE0}</span>}
        {data4.dataE1 && (
          <span className="col2"> {JSON.stringify(data4.dataE1)}</span>
        )}
        {data4.dataE2 && (
          <span className="col3"> {JSON.stringify(data4.dataE2)}</span>
        )}
        {data4.dataE3 && (
          <span className="col4"> {JSON.stringify(data4.dataE3)}</span>
        )}
        {data4.dataE4 && <span className="col5"> {data4.dataE4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data4.dataE0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-6">
        <span className="col0">6.</span>

        {data5.dataF0 && <span className=""> {data5.dataF0}</span>}
        {data5.dataF1 && (
          <span className="col2"> {JSON.stringify(data5.dataF1)}</span>
        )}
        {data5.dataF2 && (
          <span className="col3"> {JSON.stringify(data5.dataF2)}</span>
        )}
        {data5.dataF3 && (
          <span className="col4"> {JSON.stringify(data5.dataF3)}</span>
        )}
        {data5.dataF4 && <span className="col5"> {data5.dataF4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data5.dataF0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-7">
        <span className="col0">7.</span>

        {data6.dataG0 && <span className=""> {data6.dataG0}</span>}
        {data6.dataG1 && (
          <span className="col2"> {JSON.stringify(data6.dataG1)}</span>
        )}
        {data6.dataG2 && (
          <span className="col3"> {JSON.stringify(data6.dataG2)}</span>
        )}
        {data6.dataG3 && (
          <span className="col4"> {JSON.stringify(data6.dataG3)}</span>
        )}
        {data6.dataG4 && <span className="col5"> {data6.dataG4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data6.dataG0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-8">
        <span className="col0">8.</span>

        {data7.dataH0 && <span className=""> {data7.dataH0}</span>}
        {data7.dataH1 && (
          <span className="col2"> {JSON.stringify(data7.dataH1)}</span>
        )}
        {data7.dataH2 && (
          <span className="col3"> {JSON.stringify(data7.dataH2)}</span>
        )}
        {data7.dataH3 && (
          <span className="col4"> {JSON.stringify(data7.dataH3)}</span>
        )}
        {data7.dataH4 && <span className="col5"> {data7.dataH4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data7.dataH0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-9">
        <span className="col0">9.</span>

        {data8.dataI0 && <span className=""> {data8.dataI0}</span>}
        {data8.dataI1 && (
          <span className="col2"> {JSON.stringify(data8.dataI1)}</span>
        )}
        {data8.dataI2 && (
          <span className="col3"> {JSON.stringify(data8.dataI2)}</span>
        )}
        {data8.dataI3 && (
          <span className="col4"> {JSON.stringify(data8.dataI3)}</span>
        )}
        {data8.dataE4 && <span className="col5"> {data8.dataI4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data8.dataI0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-10">
        <span className="col0">10.</span>

        {data9.dataJ0 && <span className=""> {data9.dataJ0}</span>}
        {data9.dataJ1 && (
          <span className="col2"> {JSON.stringify(data9.dataJ1)}</span>
        )}
        {data9.dataJ2 && (
          <span className="col3"> {JSON.stringify(data9.dataJ2)}</span>
        )}
        {data9.dataJ3 && (
          <span className="col4"> {JSON.stringify(data9.dataJ3)}</span>
        )}
        {data9.dataJ4 && <span className="col5"> {data9.dataJ4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data9.dataJ0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      {/* crypto */}

      <div className="row-11">
        <span className="col0">11.</span>

        {data10.dataK0 && <span className="col1"> {data10.dataK0}</span>}
        {data10.dataK1 && (
          <span className="col2"> {JSON.stringify(data10.dataK1)}</span>
        )}
        {data10.dataK2 && (
          <span className="col3"> {JSON.stringify(data10.dataK2)}</span>
        )}
        {data10.dataK3 && (
          <span className="col4"> {JSON.stringify(data10.dataK3)}</span>
        )}
        {data10.dataK4 && <span className="col5"> {data10.dataK4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data10.dataK0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-12">
        <span className="col0">12.</span>

        {data11.dataL0 && <span className="col1"> {data11.dataL0}</span>}
        {data11.dataL1 && (
          <span className="col2"> {JSON.stringify(data11.dataL1)}</span>
        )}
        {data11.dataL2 && (
          <span className="col3"> {JSON.stringify(data11.dataL2)}</span>
        )}
        {data11.dataL3 && (
          <span className="col4"> {JSON.stringify(data11.dataL3)}</span>
        )}
        {data11.dataL4 && <span className="col5"> {data11.dataL4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data11.dataL0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-13">
        <span className="col0">13.</span>

        {data12.dataM0 && <span className="col1"> {data12.dataM0}</span>}
        {data12.dataM1 && (
          <span className="col2"> {JSON.stringify(data12.dataM1)}</span>
        )}
        {data12.dataM2 && (
          <span className="col3"> {JSON.stringify(data12.dataM2)}</span>
        )}
        {data12.dataM3 && (
          <span className="col4"> {JSON.stringify(data12.dataM3)}</span>
        )}
        {data12.dataM4 && <span className="col5"> {data12.dataM4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data12.dataM0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
      <div className="row-14">
        <span className="col0">14.</span>

        {data13.dataN0 && <span className="col1"> {data13.dataN0}</span>}
        {data13.dataN1 && (
          <span className="col2"> {JSON.stringify(data13.dataN1)}</span>
        )}
        {data13.dataN2 && (
          <span className="col3"> {JSON.stringify(data13.dataN2)}</span>
        )}
        {data13.dataN3 && (
          <span className="col4"> {JSON.stringify(data13.dataN3)}</span>
        )}
        {data13.dataN4 && <span className="col5"> {data13.dataN4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data13.dataN0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-15">
        <span className="col0">15.</span>

        {data14.dataO0 && <span className="col1"> {data14.dataO0}</span>}
        {data14.dataO1 && (
          <span className="col2"> {JSON.stringify(data14.dataO1)}</span>
        )}
        {data14.dataO2 && (
          <span className="col3"> {JSON.stringify(data14.dataO2)}</span>
        )}
        {data14.dataO3 && (
          <span className="col4"> {JSON.stringify(data14.dataO3)}</span>
        )}
        {data14.dataO4 && <span className="col5"> {data14.dataO4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data14.dataO0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-16">
        <span className="col0">16.</span>

        {data15.dataP0 && <span className="col1"> {data15.dataP0}</span>}
        {data15.dataP1 && (
          <span className="col2"> {JSON.stringify(data15.dataP1)}</span>
        )}
        {data15.dataP2 && (
          <span className="col3"> {JSON.stringify(data15.dataP2)}</span>
        )}
        {data15.dataP3 && (
          <span className="col4"> {JSON.stringify(data15.dataP3)}</span>
        )}
        {data15.dataP4 && <span className="col5"> {data15.dataP4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data15.dataP0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-17">
        <span className="col0">17.</span>

        {data16.dataQ0 && <span className="col1"> {data16.dataQ0}</span>}
        {data16.dataQ1 && (
          <span className="col2"> {JSON.stringify(data16.dataQ1)}</span>
        )}
        {data16.dataQ2 && (
          <span className="col3"> {JSON.stringify(data16.dataQ2)}</span>
        )}
        {data16.dataQ3 && (
          <span className="col4"> {JSON.stringify(data16.dataQ3)}</span>
        )}
        {data16.dataQ4 && <span className="col5"> {data16.dataQ4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data16.dataQ0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-18">
        <span className="col0">18.</span>

        {data17.dataR0 && <span className="col1"> {data17.dataR0}</span>}
        {data17.dataR1 && (
          <span className="col2"> {JSON.stringify(data17.dataR1)}</span>
        )}
        {data17.dataR2 && (
          <span className="col3"> {JSON.stringify(data17.dataR2)}</span>
        )}
        {data17.dataR3 && (
          <span className="col4"> {JSON.stringify(data17.dataR3)}</span>
        )}
        {data17.dataR4 && <span className="col5"> {data17.dataR4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data17.dataR0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-19">
        <span className="col0">19.</span>

        {data18.dataS0 && <span className="col1"> {data18.dataS0}</span>}
        {data18.dataS1 && (
          <span className="col2"> {JSON.stringify(data18.dataS1)}</span>
        )}
        {data18.dataS2 && (
          <span className="col3"> {JSON.stringify(data18.dataS2)}</span>
        )}
        {data18.dataS3 && (
          <span className="col4"> {JSON.stringify(data18.dataS3)}</span>
        )}
        {data18.dataS4 && <span className="col5"> {data18.dataS4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data18.dataS0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>

      <div className="row-20">
        <span className="col0">20.</span>

        {data19.dataT0 && <span className="col1"> {data19.dataT0}</span>}
        {data19.dataT1 && (
          <span className="col2"> {JSON.stringify(data19.dataT1)}</span>
        )}
        {data19.dataT2 && (
          <span className="col3"> {JSON.stringify(data19.dataT2)}</span>
        )}
        {data19.dataT3 && (
          <span className="col4"> {JSON.stringify(data19.dataT3)}</span>
        )}
        {data19.dataT4 && <span className="col5"> {data19.dataT4}</span>}
        <span
          className="col6"
          onClick={() => toAdd(data19.dataT0)}
          onMouseOver={handleMouseHover}
        >
          Add
        </span>
      </div>
    </div>
  );
};
export default Api;
