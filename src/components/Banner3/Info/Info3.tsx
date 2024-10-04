import React from 'react';
import '../Banner3.scss';
import { Container, Row, Col } from 'react-bootstrap';
import CSZ from '../../../assets/CSZ.png';
import concretmoon from '../../../assets/concretmoon.png';

const Info3 = () => {
    return (
        <Container fluid className="banner3">
            <Row>
                <Col md={6} className="text-container">
                    <h2>QuakeAway: Building Safely Beyond Earth</h2>
                    <p>
                    When selecting a site for building on any planet or moon, understanding 
                    its seismic activity is crucial. Areas with high seismic activity pose 
                    significant risks to construction and long-term habitation. On Earth, 
                    building in seismically active zones often requires complex engineering 
                    solutions, such as reinforced foundations, shock absorbers, and flexible 
                    structural designs, to prevent catastrophic damage from earthquakes. 
                    These measures significantly increase the cost and complexity 
                    of construction projects.
                    </p>
                    <p>
                    For example, building in earthquake-prone areas on Earth can raise 
                    construction costs by as much as 30-50% due to the need for enhanced 
                    materials, labor, and specialized engineering. Now, imagine extending 
                    this challenge to off-world construction. The added difficulty of 
                    transporting materials, machinery, and human expertise across millions 
                    of kilometers makes building on another planet or moon even more 
                    resource-intensive and expensive.
                    </p>
                    <p>
                    This is where QuakeAway offers a game-changing advantage. By 
                    analyzing and isolating seismic data, QuakeAway helps scientists and 
                    engineers identify the most stable, low-risk regions for construction on 
                    other planets. Settling in a low-seismic-risk zone drastically reduces the 
                    need for expensive and complex earthquake-resistant architecture, 
                    cutting costs and simplifying logistics. QuakeAway enables a future 
                    where we can establish colonies and build infrastructure with 
                    confidence, knowing that we have chosen the safest possible location.
                    </p>
                </Col>
                <Col md={6} className="image-container d-flex flex-column align-items-center">
                    <img src={CSZ} alt="CSZ" className="rounded-circle mb-3 img-fluid" />
                    <img src={concretmoon} alt="concretmoon" className="rounded-circle img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Info3;