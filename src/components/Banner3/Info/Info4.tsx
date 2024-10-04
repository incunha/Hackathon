import React from 'react';
import '../Banner3.scss';
import { Container, Row, Col } from 'react-bootstrap';
import spacehouses from '../../../assets/spacehouses.jpg';
import mars from '../../../assets/mars.jpg';

const Info4 = () => {
    return (
        <Container fluid className="banner3">
            <Row>
                <Col md={6} className="text-container">
                    <h2>The Importance of Seismic Stability for Future Lunar and Martian Bases</h2>
                    <p>
                    One of the key projects on the horizon is building a permanent lunar 
                    base. The Moon's proximity to Earth makes it the ideal candidate for a 
                    launching platform to reach further planets like Mars and beyond. A 
                    lunar launch base would dramatically reduce the cost of deep-space 
                    missions, as launching from the Moon—where the gravitational pull is 
                    weaker—requires far less energy than launching from Earth.
                    </p>
                    <p>
                    However, constructing such a base is not without its challenges. While 
                    the Moon has a relatively stable seismic environment compared to Earth,
                    the Apollo seismometers detected shallow "moonquakes" that could 
                    pose risks to long-term infrastructure. A single moonquake, although not 
                    as powerful as an Earthquake, could have devastating effects on poorly 
                    placed or inadequately reinforced structures, especially given the harsh 
                    environmental conditions of the Moon. This makes selecting a stable, 
                    seismically quiet location crucial for any permanent lunar facility, 
                    particularly one as important as a launch site.
                    </p>
                    <p>
                    On Mars, the seismic risks are similarly significant. InSight has recorded 
                    numerous Marsquakes, some of which suggest that certain regions of 
                    the planet may be more prone to seismic activity than others. Selecting 
                    the right area on Mars for construction, whether for research outposts, 
                    habitat modules, or industrial facilities, could mean the difference 
                    between a long-lasting colony and one vulnerable to Marsquakes.
                    </p>
                    <p>
                    QuakeAway provides the solution to these challenges by enabling 
                    precise, real-time analysis of seismic data, allowing future missions to 
                    land in the most stable regions on both the Moon and Mars. This will 
                    minimize construction costs and ensure the long-term durability of 
                    human settlements and critical infrastructure.
                    </p>
                </Col>
                <Col md={6} className="image-container d-flex flex-column align-items-center">
                    <img src={spacehouses} alt="space-houses" className="rounded-circle mb-3 img-fluid" />
                    <img src={mars} alt="mars image 2" className="rounded-circle img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Info4;