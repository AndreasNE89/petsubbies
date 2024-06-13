import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ProductDescriptions from './ProductDesign';
import './App.css'; // Import the CSS file for styling

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/product-descriptions" element={<ProductDescriptions />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
