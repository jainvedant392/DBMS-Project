import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import Account from '../Account';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import Wallet from '../Wallet';
import Market from '../Market';
import Testing from '../Testing';
import Api from '../API/apio';
import WatchList from '../WatchList';
import Preloader from '../Preloader';
const Routing = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
        <Route
          path="/account"
          element={isLoading ? <Preloader /> : <Account />}
        />
        <Route
          path="/market"
          element={isLoading ? <Preloader /> : <Market />}
        />
        <Route
          path="/signup"
          element={isLoading ? <Preloader /> : <SignUp />}
        />
        <Route path="/login" element={isLoading ? <Preloader /> : <LogIn />} />
        <Route
          path="/wallet"
          element={isLoading ? <Preloader /> : <Wallet />}
        />
        <Route
          path="/testing"
          element={isLoading ? <Preloader /> : <Testing />}
        />
        <Route path="/api" element={isLoading ? <Preloader /> : <Api />} />
        <Route
          path="/watchlist"
          element={isLoading ? <Preloader /> : <WatchList />}
        />
      </Routes>
    </>
  );
};

export default Routing;
