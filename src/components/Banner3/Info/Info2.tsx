import { Container, Row, Col } from 'react-bootstrap';
import astronaut from '../../../assets/astronaut.jpg';
import insightmars from '../../../assets/insightmars.jpg';

const Info2 = () => {
    return (
        <Container fluid className="banner3">
            <Row className="g-0 justify-content-center"> 
                <Col md={5} className="text-container"> 
                    <h2>From Apollo to InSight:<br/> 
                    The Legacy of Planetary Seismology</h2>
                    <p>
                    The foundation of planetary seismology was laid during the Apollo<br />
                    missions, when astronauts placed seismometers on the Moon between<br /> 
                    1969 and 1977. These instruments were crucial in recording lunar<br /> 
                    quakes, unveiling that the Moon, although lacking tectonic activity like<br /> 
                    Earth, still experiences seismic events. The data collected from these<br /> 
                    Apollo-era seismometers provided insights into the Moon's internal<br /> 
                    structure, helping scientists understand its geologic activity and<br /> 
                    composition.
                    </p>
                    <p>
                    Fast forward to the 21st century, NASA's Mars InSight mission, launched<br /> 
                    in 2018, has been similarly transformative. The InSight lander deployed<br /> 
                    a highly sensitive seismometer (SEIS) on the Martian surface to<br /> 
                    measure "Marsquakes" and reveal details about Mars' internal structure.<br /> 
                    The data from InSight has illuminated key aspects of Mars' geology,<br /> 
                    confirming that it too experiences quakes, though their sources differ<br /> 
                    from Earth's tectonic movements. These missions, on the Moon and<br /> 
                    Mars, illustrate the critical role of seismology in understanding the<br /> 
                    structural and seismic activity of other celestial bodies.
                    </p>
                    <p>
                   Both Apollo and InSight missions underscore the importance of<br /> 
                   collecting seismic data for identifying safe areas for potential human<br /> 
                   habitation. While these pioneering missions have given us glimpses of<br /> 
                   the seismic environments on the Moon and Mars, continuous high-<br />
                   resolution seismic data, like that provided by QuakeAway, will be<br /> 
                   essential for understanding the risks of settling in specific areas.
                    </p>
                </Col>
                <Col md={5} className="image-container d-flex flex-column align-items-center justify-content-center">
                    <img 
                        src={astronaut} 
                        alt="astronaut" 
                        className="rounded-circle img-fluid" 
                        style={{ marginBottom: "120px" }} 
                    />
                    <img 
                        src={insightmars} 
                        alt="insight mars" 
                        className="rounded-circle img-fluid" 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Info2;
