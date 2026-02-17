import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import FirstPage from './pages/FirstPage';
import ResultsPage from './pages/Result';

// Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          /* This is your landing page with the robot */
          <Route path="/" element={<FirstPage />} />

          /* This is the page with the 4 result categories */
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;