// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/footer.css';
import SocialBar from './SocialBar';

// --- FOOTER ---
class Footer extends React.Component {
    render() {
        return(
            <Container id="footer">
                <Row>
                    <SocialBar />
                </Row>
                <Row>
                    <Col md={12} id="signature-wrapper">
                        <footer>
                            <h6>&copy; 2021 made with React by Brian Tamsing.</h6>
                        </footer>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;