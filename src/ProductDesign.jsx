import React from 'react';
import { Link } from 'react-router-dom';
import productDescriptionsImage from './DALL·E May 30 Product Descriptions.webp'; // replace with actual path to the product descriptions image
import './App.css'; // Import the CSS file for styling

function ProductDescriptions() {
    return (
        <div className="page">
            <img src={productDescriptionsImage} alt="Product Descriptions" className="background-image" />
            <div className="overlay">
                <h1>Product Descriptions</h1>
                <Link to="/" className="button">Home</Link>
                <Link to="/about-us" className="button">About Us</Link>
            </div>
        </div>
    );
}

export default ProductDescriptions;
