// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
//import HamburgerMenu from './HamburgerMenu';
import '../Stylesheets/navigationBar.css';

// --- NAVIGATION BAR ---
class NavigationBar extends React.Component {
    render() {
        return(
            <Container fluid className="navigation-container">
                <Row>
                    <Col md={12} className="nav-wrapper">
                        <Navigation />
                        {/* <HamburgerMenu /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NavigationBar;