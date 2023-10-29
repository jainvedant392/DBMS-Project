import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import Account from '../Account';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import Wallet from '../Wallet';
import Market from '../Market';
import Assets from '../Assets';
const Routing = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/account" element={<Account />} />
        <Route path="/market" element={<Market />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
};

export default Routing;
