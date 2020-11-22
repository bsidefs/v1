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
                        <h1>Recent Projects.<span className="cursor">|</span></h1>
                    </Col>
                </Row>
                <Row style={{paddingLeft: '15px'}}>
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
                                            &bull; An iOS application that allows searching profiles on GitHub to 
                                            view user follower information.
                                        </h4>
                                        <h4>
                                            &bull; This information ranges from a user's username, 
                                            name, and bio, to public repo, public gist, follower, and following counts.
                                        </h4>
                                        <h4>
                                            &bull; Developed as part of an iOS course.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>Swift <span className="divider">/</span> <br/> GitHub API</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {/* --- STATIFY -- */}
                    <Col sm={12} md={4}>
                        <Row className="project">
                            <Col className="desc">
                                <Row>
                                    <Col className="project-title">
                                        <Row>
                                            <Col>
                                                <h3>Statify</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={6}>
                                                <h4>iOS</h4>
                                            </Col>
                                            <Col xs={12} sm={6} className="project-link">
                                                <a href="https://github.com/xbtamsing/Statify" rel="noopener noreferrer" target="_blank">
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
                                            &bull; Small scale application which gives Spotify profile information at a glance.
                                        </h4>
                                        <h4>
                                            &bull; View your playlist, following, and follower counts
                                        </h4>
                                        <h4>
                                            &bull; View your Top Artists and Top Tracks
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>Swift <span className="divider">/</span> <br/> Spotify Web API</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {/* --- SPARTANDRIVE -- */}
                    <Col sm={12} md={4}>
                        <Row className="project">
                            <Col className="desc">
                                <Row>
                                    <Col className="project-title">
                                        <Row>
                                            <Col>
                                                <h3>SpartanDrive</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={6}>
                                                <h4>iOS</h4>
                                            </Col>
                                            <Col xs={12} sm={6} className="project-link">
                                                <a href="https://github.com/xbtamsing/SpartanDrive" rel="noopener noreferrer" target="_blank">
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
                                        <h4>&bull; A mobile cloud-based file management and accessibility platform.</h4>
                                        <h4>
                                            &bull; Registered users can upload files to cloud storage, and may view all uploaded 
                                            files in-app. 
                                        </h4>
                                        <h4>
                                            &bull; Also supports folder creation, file/folder sharing 
                                            and unsharing with other registered users, upload statistics, and more.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>Swift <span className="divider">/</span> <br/> Firebase API</h4>
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