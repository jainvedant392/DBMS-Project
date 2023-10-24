import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar';
import Home from '../Home';
import Account from '../Account';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import Wallet from '../Wallet';
const Routing = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
};

export default Routing;
