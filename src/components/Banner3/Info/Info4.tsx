
import '../Banner3.scss';
import { Container, Row, Col } from 'react-bootstrap';
import spacehouses from '../../../assets/spacehouses.jpg';
import mars from '../../../assets/mars.jpg';

const Info4 = () => {
    return (
        <Container fluid className="banner3">
            <Row className="g-0 justify-content-center"> 
                <Col md={5} className="text-container"> 
                    <h2>The Importance of Seismic Stability for Future Lunar and Martian Bases</h2>
                    <p>
                    One of the key projects on the horizon is building a permanent lunar<br /> 
                    base. The Moon's proximity to Earth makes it the ideal candidate for a<br /> 
                    launching platform to reach further planets like Mars and beyond. A<br /> 
                    lunar launch base would dramatically reduce the cost of deep-space<br /> 
                    missions, as launching from the Moon—where the gravitational pull is<br /> 
                    weaker—requires far less energy than launching from Earth.
                    </p>
                    <p>
                    However, constructing such a base is not without its challenges. While<br /> 
                    the Moon has a relatively stable seismic environment compared to Earth,<br />
                    the Apollo seismometers detected shallow "moonquakes" that could <br />
                    pose risks to long-term infrastructure. A single moonquake, although not<br /> 
                    as powerful as an Earthquake, could have devastating effects on poorly<br /> 
                    placed or inadequately reinforced structures, especially given the harsh<br /> 
                    environmental conditions of the Moon. This makes selecting a stable,<br /> 
                    seismically quiet location crucial for any permanent lunar facility,<br /> 
                    particularly one as important as a launch site.
                    </p>
                    <p>
                    On Mars, the seismic risks are similarly significant. InSight has recorded<br /> 
                    numerous Marsquakes, some of which suggest that certain regions of<br /> 
                    the planet may be more prone to seismic activity than others. Selecting<br /> 
                    the right area on Mars for construction, whether for research outposts,<br /> 
                    habitat modules, or industrial facilities, could mean the difference<br /> 
                    between a long-lasting colony and one vulnerable to Marsquakes.
                    </p>
                    <p>
                    QuakeAway provides the solution to these challenges by enabling<br /> 
                    precise, real-time analysis of seismic data, allowing future missions to<br /> 
                    land in the most stable regions on both the Moon and Mars. This will<br /> 
                    minimize construction costs and ensure the long-term durability of<br /> 
                    human settlements and critical infrastructure.
                    </p>
                </Col>
                <Col md={5} className="image-container d-flex flex-column align-items-center justify-content-center">
                    <img 
                        src={spacehouses} 
                        alt="space houses" 
                        className="rounded-circle img-fluid" 
                        style={{ marginBottom: "120px" }} 
                    />
                    <img 
                        src={mars} 
                        alt="mars image 2" 
                        className="rounded-circle img-fluid"
                        />
                </Col>
            </Row>
        </Container>
    );
};

export default Info4;