import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import homeImage from './DALL·E landing page May 30.webp';
import alternateHome from './EcoPets Club Homepage Design 2024-05-30.webp'// replace with actual path to the landing page image
import './App.css';

function Home() {
    const [number, setNumber] = React.useState(0);

    const randomizeNumber = () => {
        const randomNumber = Math.floor(Math.random() * 2);
        setNumber(randomNumber);
    };

    useEffect(() => {
        randomizeNumber();
    }, []);

    return (
        <div className="page">
            <img
                src={number === 0 ? homeImage : alternateHome}
                alt="EcoPets Club Landing Page"
                className="background-image"
            />
            <div className="overlay">
                <h1>Welcome to EcoPets Club!</h1>
                <Link to="/about-us" className="button">About Us</Link>
                <Link to="/product-descriptions" className="button">Product Descriptions</Link>
            </div>
        </div>
    );
}


export default Home;