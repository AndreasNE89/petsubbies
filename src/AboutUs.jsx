import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from './DALL·E May 30 About EcoPets Club.webp'; // replace with actual path to the about us image
import './App.css'; // Import the CSS file for styling

function AboutUs() {
    return (
        <div className="page">
            <img src={aboutUsImage} alt="About Us" className="background-image" />
            <div className="overlay">
                <h1>About Us</h1>
                <Link to="/" className="button">Home</Link>
                <Link to="/product-descriptions" className="button">Product Descriptions</Link>
            </div>
        </div>
    );
}

export default AboutUs;