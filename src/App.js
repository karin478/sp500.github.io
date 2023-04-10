import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';
import PricePage from './pages/PricePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router basename="/sp500.github.io">
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/description" element={<DescriptionPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
