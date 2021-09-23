// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/about.css';

// --- ABOUT ---
class About extends React.Component {
    render() {
        return(
            <Container id="about" className="main-content-wrapper">
                <Row>
                    <Col md={12} id="intro">
                        <h1>Hey! I'm Brian.</h1>
                        <h2>Software Engineer.</h2>
                        <h2>Based in Ventura, CA.<span className="cursor">|</span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} id="desc">
                        <h3>About</h3>
                            <p>
                                Recent graduate from San José State University.
                                <br/>
                                Enthusiastic with an affinity and deep passion for iOS and web development.
                            </p>
                            <p>
                                Feel free to look around and check out my resume or a few of my recent projects!
                            </p>
                            <br />
                            <p id="highlight">
                                Currently seeking full-time opportunities.
                            </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;