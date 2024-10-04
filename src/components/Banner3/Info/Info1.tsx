import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Info1 = () => {
    return (
        <div className="banner3" >
            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                <Container>
                    <h3 >About QuakeAway</h3>
                    <p >QuakeAway is a cutting-edge seismic data analysis solution developed to revolutionize planetary exploration and 
                    future human habitation on celestial bodies. By using advanced AI algorithms to isolate and identify seismic signals,
                    QuakeAway enables real-time, onboard processing of seismic data from distant planets and moons. It provides a
                    critical tool to mitigate the inherent risks of settling in seismic zones, ensuring that humans can choose the safest
                    and most stable regions for their off-world colonies.</p>
                </Container>
            </div>
        </div>
    );
};

export default Info1;