// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/projects.css';
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';

// --- PROJECTS ---
class Projects extends React.Component {
    render() {
        return(
            <Container id="projects" className="main-content-wrapper">
                <Row>
                    <Col id="projects-title">
                        <h1>Projects.<span className="cursor">|</span></h1>
                    </Col>
                </Row>
                <Row style={{paddingLeft: '15px'}}>
                    {/* --- SPRINGBUCKS -- */}
                    <Col sm={12} md={4}>
                        <Row className="project">
                            <Col className="desc">
                                <Row>
                                    <Col className="project-title">
                                        <Row>
                                            <Col>
                                                <h3>Springbucks</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={6}>
                                                <h4>Web</h4>
                                            </Col>
                                            <Col xs={12} sm={6} className="project-link">
                                                <a href="https://github.com/nguyensjsu/sp21-172-team-c" rel="noopener noreferrer" target="_blank">
                                                    <IconContext.Provider value={{ color: "#FFFFFFE6", size: "1.3rem" }}>
                                                        <div>
                                                            <FaGithub />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-info">
                                        <h4>&bull; Full-stack web application replicating a Starbucks cashier’s app.</h4>
                                        <h4>
                                            &bull; Wrote a complete REST API which allows for orders and transactions to be made using Starbucks cards. 
                                        </h4>
                                        <h4>
                                            &bull; Deployed the application to GCP and GKE, complete with a Kong API Gateway.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>HTML/CSS <span className="divider">/</span> JavaScript <span className="divider">/</span> Java
                                        <br/> 
                                            Spring <span className="divider">/</span> Thymeleaf <span className="divider">/</span> Bootstrap 5
                                        </h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    {/* --- THE WINDOW SPECIALIST -- */}
                    <Col sm={12} md={4}>
                        <Row className="project">
                            <Col className="desc">
                                <Row>
                                    <Col className="project-title">
                                        <Row>
                                            <Col>
                                                <h3>The Window Specialist</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={6}>
                                                <h4>iOS / Web</h4>
                                            </Col>
                                            <Col xs={12} sm={6} className="project-link">
                                                <a href="https://github.com/Rythor/Computer_Engineering_195" rel="noopener noreferrer" target="_blank">
                                                    <IconContext.Provider value={{ color: "#FFFFFFE6", size: "1.3rem" }}>
                                                        <div>
                                                            <FaGithub />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-info">
                                        <h4>&bull; Revolutionary application which triggers a UiPath RPA to automate window manufacturer software, enabling on-site, mobile quoting.</h4>
                                        <h4>
                                            &bull; Designed using SwiftUI and UIKit. 
                                        </h4>
                                        <h4>
                                            &bull; Wrote a Node/Express.js
                                            API to receive quotes provided by the RPA.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>Swift <span className="divider">/</span> JavaScript
                                        <br/> 
                                            UIPath Cloud API
                                        </h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    {/* --- GITHUB FOLLOWERS -- */}
                    <Col sm={12} md={4}>
                        <Row className="project">
                            <Col className="desc">
                                <Row>
                                    <Col className="project-title">
                                        <Row>
                                            <Col>
                                                <h3>GitHubFollowers</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={6}>
                                                <h4>iOS</h4>
                                            </Col>
                                            <Col xs={12} sm={6} className="project-link">
                                                <a href="https://github.com/xbtamsing/GitHubFollowers" rel="noopener noreferrer" target="_blank">
                                                    <IconContext.Provider value={{ color: "#FFFFFFE6", size: "1.3rem" }}>
                                                        <div>
                                                            <FaGithub />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-info">
                                        <h4>&bull; Personal project.
                                        </h4>
                                        <h4>
                                            &bull; Allows searching of GitHub user accounts and viewing of their public follower lists.
                                        </h4>
                                        <h4>
                                            &bull; Follower profiles are complete with information such as one’s bio, follower/following counts, repo/gist counts, etc.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>Swift <span className="divider">/</span> 
                                        <br/> 
                                            GitHub API
                                        </h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Projects;