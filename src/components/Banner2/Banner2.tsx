import React, { useEffect, useState } from 'react';
import './Banner2.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import Turkey from '../../assets/Turkey.jpg';
import Mars from '../../assets/earthquake2.jpeg'; 
import Moon from '../../assets/earthquake3.jpg'; 
import Jupiter from '../../assets/earthquake4.jpg'; 

const images = [Turkey, Mars, Moon, Jupiter]; 

const Banner2 = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            setCurrentImage(images[(index + 1) % images.length]);
        }, 5000); 

        return () => clearInterval(interval); 
    }, [index]);

    return (
        <div className="banner2">
            <div className="overlay d-flex align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-container p-4">
                            <h3>Ready to Explore the Future of Safe Space Habitats?</h3>
                            <p>With QuakeAway, you can discover how advanced AI-
                                driven seismic analysis is revolutionizing the way we plan 
                                and build on other planets. See how our cutting-edge 
                                solution works in real time to isolate seismic activity and 
                                identify stable regions for safe construction.</p>
                            <p>Don't just imagine the future- experience it.</p>
                            <p>Click below to watch the demo and see QuakeAway in action!</p>
                            <div className="button-container">
                                <Button variant="primary" className="mr-2">Watch the Demo Now</Button>
                                <Button variant="secondary">Upload File</Button>
                            </div>
                        </Col>
                        <Col md={6} className="image-container d-flex justify-content-center align-items-center">
                            <img src={currentImage} alt="Space" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner2;
