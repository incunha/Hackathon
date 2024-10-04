
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Info1 = () => {
    return (
        <div className="banner3" >
            <div className="overlay d-flex flex-column justify-content-left align-items-left text-left">
                <Container style={{marginLeft: "8%", marginTop:"6%"}}>
                    <h2 style={{fontSize: "50px"}} >About QuakeAway</h2>
                    <p >QuakeAway is a cutting-edge seismic data analysis solution developed to revolutionize planetary exploration and<br /> 
                    future human habitation on celestial bodies. By using advanced AI algorithms to isolate and identify seismic signals,<br />
                    QuakeAway enables real-time, onboard processing of seismic data from distant planets and moons. It provides a<br />
                    critical tool to mitigate the inherent risks of settling in seismic zones, ensuring that humans can choose the safest<br />
                    and most stable regions for their off-world colonies.</p>
                </Container>
            </div>
        </div>
    );
};

export default Info1;