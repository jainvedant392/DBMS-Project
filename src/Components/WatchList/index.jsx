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
        <table className="watchlist-table">
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Asset Name</th>
              <th>Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.asset_id}>
                <td>{item.asset_id}</td>
                <td>{item.asset_name}</td>
                <td>
                  <button className="btn">
                    <a
                      href={item.asset_info}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-a"
                    >
                      Details
                    </a>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => removeItem(item.asset_id)}
                    className="btn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
