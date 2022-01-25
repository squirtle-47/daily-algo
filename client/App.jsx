import React from "react";
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlgoPage from './pages/AlgoPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import StatsPage from './pages/StatsPage.jsx';

const App = () => {
  return <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlgoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
}
export default App;
