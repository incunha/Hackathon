import React, { useEffect, useState } from 'react';
import './Banner2.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import Turkey from '../../assets/Turkey.jpg';
import earthquake2 from '../../assets/earthquake2.jpg'; 
import earthquake3 from '../../assets/earthquake3.jpg'; 
import earthquake4 from '../../assets/earthquake4.jpg'; 
import { useNavigate } from 'react-router-dom';

const images = [Turkey, earthquake2, earthquake3, earthquake4]; 

const Banner2 = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [index, setIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass('fade-out');

         
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
                setCurrentImage(images[(index + 1) % images.length]);
                setFadeClass('fade-in');
            }, 800); 
        }, 5000); 

        return () => clearInterval(interval); 
    }, [index]);

    return (
        <div className="banner2">
            <div className="overlay d-flex align-items-center">
                <Container style={{marginLeft: "7%"}}>
                    <Row className="align-items-center">
                        <Col md={5} className="text-container-2 p-4">
                        <h3><strong>Ready to Explore the Future of Safe Space Habitats?</strong></h3>
                            <p>With <strong>QuakeAway</strong>, you can discover how advanced AI-
                                driven seismic analysis is revolutionizing the way we plan 
                                and build on other planets. See how our cutting-edge 
                                solution works in real time to isolate seismic activity and 
                                identify stable regions for safe construction.</p>
                            <p><strong>Don't just imagine the future- experience it.</strong></p>
                            <p>Click below to watch the demo and see QuakeAway in action!</p>
                            <div className="button-container">
                                <Button className="watchDemo">Watch the Demo Now</Button>
                                <Button className="uploadFile" onClick={() => navigate("/info")}>Upload File</Button>
                            </div>
                        </Col>
                        <Col md={5} className="banner-image-container d-flex justify-content-center align-items-center">
                        <img src={currentImage} alt="Space" className={`img-fluid ${fadeClass}`} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner2;
