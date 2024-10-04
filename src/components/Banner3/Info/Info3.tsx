
import '../Banner3.scss';
import { Container, Row, Col } from 'react-bootstrap';
import CSZ from '../../../assets/CSZ.png';
import concretmoon from '../../../assets/concretmoon.png';

const Info3 = () => {
    return (
        <Container fluid className="banner3">
            <Row className="g-0 justify-content-center"> 
                <Col md={5} className="text-container"> 
                    <h2>QuakeAway: Building Safely Beyond Earth</h2>
                    <p>
                    When selecting a site for building on any planet or moon, understanding<br /> 
                    its seismic activity is crucial. Areas with high seismic activity pose<br /> 
                    significant risks to construction and long-term habitation. On Earth,<br /> 
                    building in seismically active zones often requires complex engineering<br /> 
                    solutions, such as reinforced foundations, shock absorbers, and flexible<br /> 
                    structural designs, to prevent catastrophic damage from earthquakes.<br /> 
                    These measures significantly increase the cost and complexity<br /> 
                    of construction projects.
                    </p>
                    <p>
                    For example, building in earthquake-prone areas on Earth can raise<br /> 
                    construction costs by as much as 30-50% due to the need for enhanced<br /> 
                    materials, labor, and specialized engineering. Now, imagine extending<br /> 
                    this challenge to off-world construction. The added difficulty of<br /> 
                    transporting materials, machinery, and human expertise across millions<br /> 
                    of kilometers makes building on another planet or moon even more<br /> 
                    resource-intensive and expensive.
                    </p>
                    <p>
                    This is where QuakeAway offers a game-changing advantage. By<br /> 
                    analyzing and isolating seismic data, QuakeAway helps scientists and<br /> 
                    engineers identify the most stable, low-risk regions for construction on<br /> 
                    other planets. Settling in a low-seismic-risk zone drastically reduces the<br /> 
                    need for expensive and complex earthquake-resistant architecture,<br /> 
                    cutting costs and simplifying logistics. QuakeAway enables a future<br /> 
                    where we can establish colonies and build infrastructure with<br /> 
                    confidence, knowing that we have chosen the safest possible location.
                    </p>
                    </Col>
                    <Col md={5} className="image-container d-flex flex-column align-items-center justify-content-center">
                    <img 
                        src={CSZ} 
                        alt="CSZ" 
                        className="rounded-circle img-fluid" 
                        style={{ marginBottom: "120px" }} 
                    />
                    <img 
                        src={concretmoon} 
                        alt="concrete moon" 
                        className="rounded-circle img-fluid" 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Info3;