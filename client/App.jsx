import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AlgoPage from './pages/AlgoPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import { useSelector } from 'react-redux';

/*
Redirect logic:

Home
Logged in: no-op
Logged out: redirect to login

Login
Logged in: redirect to home
Logged out: no-op

Signup
Logged in: redirect to home
Logged out: no-op

Stats
Logged in: no-op
Logged out: redirect to login

*/

const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={loggedIn ? <AlgoPage /> : <Navigate replace to="/login" />} />
      <Route path="/login" element={loggedIn ? <Navigate replace to="/" /> : <LoginPage />} />
      <Route path="/signup" element={loggedIn ? <Navigate replace to="/" /> : <SignupPage />} />
      <Route path="/stats" element={loggedIn ? <StatsPage /> : <Navigate replace to="/login" />} />
    </Routes>
  </BrowserRouter>;
}
export default App;
