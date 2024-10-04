import React, { useEffect, useState } from 'react';
import './Banner.scss';
import bg from '../../assets/bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Banner = () => {
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true);
            setTimeout(() => setShake(false), 500); 
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                <Container>
                    <h1 className={`text-white ${shake ? 'shake' : ''}`}>QuakeAway</h1>
                    <h3 className={`text-white ${shake ? 'shake' : ''}`}>Isolating Quakes, Securing Space</h3>
                    <p className="text-white">AI seismic analysis of distant planets and moons, identifying stable regions for human settlements.</p>
                </Container>
            </div>
        </div>
    );
};

export default Banner;
