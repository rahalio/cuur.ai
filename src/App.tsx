import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { AIAnalysis } from './pages/AIAnalysis';
import { RapidResults } from './pages/RapidResults';
import { Accuracy } from './pages/Accuracy';
import { Security } from './pages/Security';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/rapid-results" element={<RapidResults />} />
          <Route path="/accuracy" element={<Accuracy />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;