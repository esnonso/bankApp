import card1 from '../Images/card1.jpg';
import card2 from '../Images/card2.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
    return(
        <Container fluid>
            <Row style={{padding:30}}>
                <Col xs={12} lg={7} >
                    <h1 className="text-center text-success">Welcome to World Best Bank's Online Banking Service!</h1>
                    <p>
                    Our Internet Banking Service offers fast and convenient access to your County Bank
                    accounts 24 hours a day, 7 days a week, with the highest level of security available.
                    </p>
                    <h3>Features</h3>
                     <p>Features available from County Bank Online banking include:</p>
                    <ul>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                </Col>
                <Col lg={5} xs={12} >
                    <h1 className="text-center text-success">Over 125 years of Leading Banking Services</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>

            <Row style={{padding:30}}>
                <Col xs={12} lg={4}>
                 <img src={card1}  alt="..." className="img-thumbnail" width="400px" height="400px"/>
                 <h4 className="text-center">Our Promise and Purpose</h4>
                 <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    including versions of Lorem Ipsum.
                 </p>
                </Col>
                <Col xs={12} lg={4}>
                    <img src={card2}  alt="..." className="img-thumbnail" width="400px" height="400px" />
                    <h4 className="text-center">Our Leadership</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        including versions of Lorem Ipsum. 
                    </p>
                </Col>
                <Col xs={12} lg={4}>
                 <img src={card1}  alt="..." className="img-thumbnail" width="400px" height="400px"/>
                 <h4 className="text-center">Our Vision</h4>
                 <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    including versions of Lorem Ipsum.
                 </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;