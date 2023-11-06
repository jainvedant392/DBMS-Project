import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WatchList = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const fetchData = async () => {
    try {
      let response = await axios.get(
        'https://walletx-backend.onrender.com/watchlist'
      );
      console.log(response.data.watchlist);
      setData(response.data.watchlist);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.error('Unauthorized: You are not logged in.');
        navigate('/login');
      } else {
        console.error(err);
      }
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const removeItem = async (_id) => {
    try {
      await axios.delete(
        `https://walletx-backend.onrender.com/watchlist/${_id}`
      );
      // console.log(response.data);
      console.log(_id);
      alert('Removed from watchlist');
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <h1>WatchList</h1>
        <ul>
          {data.map((item) => (
            <React.Fragment key={item.asset_id}>
              <div className="watchlist">
                <h3>Asset ID: {item.asset_id}</h3>
                <h3>Asset Name: {item.asset_name}</h3>
                <button className="btn">
                  <a href={item.asset_info} target="blank" className="custom-a">
                    Details
                  </a>
                </button>
                <button
                  onClick={() => removeItem(item.asset_id)}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WatchList;
