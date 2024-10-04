import React from 'react';
import '../Banner3.scss';
import { Container, Row, Col } from 'react-bootstrap';
import earth from '../../../assets/earth.jpg';
import sismp from '../../../assets/sismp.png';

const Info5 = () => {
    return (
        <Container fluid className="banner3">
            <Row>
                <Col md={6} className="text-container">
                    <h2>QuakeAway: Building Safely Beyond Earth</h2>
                    <p>
                    As humanity expands into space, the costs of building and maintaining 
                    structures on other worlds will be influenced by the seismic 
                    characteristics of these bodies. On Earth, we have learned from 
                    experience that building in seismic zones requires greater resources and 
                    more advanced engineering. The same principles apply to other planets 
                    and moons, but the stakes—and the costs—are even higher. QuakeAway ensures that the need for complex seismic-resistant construction can be avoided by selecting the safest regions from the start.
                    </p>
                    <p>
                    In the future, as we move toward constructing permanent bases, 
                    research outposts, and even industrial facilities on the Moon, Mars, and 
                    beyond, seismic stability will be an essential factor in site selection. 
                    QuakeAway is the tool that will enable us to navigate the unknown 
                    landscapes of other worlds, guiding us to the safest and most stable 
                    regions for our interplanetary ambitions.
                    </p>
                    <p>
                    With QuakeAway, we're not only unlocking the secrets of seismic activity 
                    on other planets—we're ensuring that humanity's future in space is built 
                    on solid ground.
                    </p>
                </Col>
                <Col md={6} className="image-container d-flex flex-column align-items-center">
                    <img src={earth} alt="earth" className="rounded-circle mb-3 img-fluid" />
                    <img src={sismp} alt="sismp" className="rounded-circle img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Info5;