import React from 'react';
import '../Banner3.scss';
import { Container, Row, Col } from 'react-bootstrap';
import astronaut from '../../../assets/astronaut.jpg';
import insightmars from '../../../assets/insightmars.jpg';

const Info2 = () => {
    return (
        <Container fluid className="banner3">
            <Row>
                <Col md={6} className="text-container">
                    <h2>From Apollo to InSight: 
                    The Legacy of Planetary Seismology</h2>
                    <p>
                    The foundation of planetary seismology was laid during the Apollo 
                    missions, when astronauts placed seismometers on the Moon between 
                    1969 and 1977. These instruments were crucial in recording lunar 
                    quakes, unveiling that the Moon, although lacking tectonic activity like 
                    Earth, still experiences seismic events. The data collected from these 
                    Apollo-era seismometers provided insights into the Moon's internal 
                    structure, helping scientists understand its geologic activity and 
                    composition.
                    </p>
                    <p>
                    Fast forward to the 21st century, NASA's Mars InSight mission, launched 
                    in 2018, has been similarly transformative. The InSight lander deployed 
                    a highly sensitive seismometer (SEIS) on the Martian surface to 
                    measure "Marsquakes" and reveal details about Mars' internal structure. 
                    The data from InSight has illuminated key aspects of Mars' geology, 
                    confirming that it too experiences quakes, though their sources differ 
                    from Earth's tectonic movements. These missions, on the Moon and 
                    Mars, illustrate the critical role of seismology in understanding the 
                    structural and seismic activity of other celestial bodies.
                    </p>
                    <p>
                   Both Apollo and InSight missions underscore the importance of 
                   collecting seismic data for identifying safe areas for potential human 
                   habitation. While these pioneering missions have given us glimpses of 
                   the seismic environments on the Moon and Mars, continuous high-
                   resolution seismic data, like that provided by QuakeAway, will be 
                   essential for understanding the risks of settling in specific areas.
                    </p>
                </Col>
                <Col md={6} className="image-container d-flex flex-column align-items-center">
                    <img src={astronaut} alt="astronaut" className="rounded-circle mb-3 img-fluid" />
                    <img src={insightmars} alt="insight mars" className="rounded-circle img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Info2;