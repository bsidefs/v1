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
                                            name, and bio, to public repo, public gist, follower, and following statistics.
                                        </h4>
                                        <h4>
                                            &bull; Developed as part of an iOS course.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>Swift <span className="divider">/ </span> GitHub API</h4>
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
                                        <h4>Swift <span className="divider">/ </span> Firebase</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {/* --- KMEANS CLUSTERING WEB APP -- */}
                    <Col sm={12} md={4}>
                        <Row className="project">
                            <Col className="desc">
                                <Row>
                                    <Col className="project-title">
                                        <Row>
                                            <Col>
                                                <h3>K-Means Clustering App</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={6}>
                                                <h4>Web</h4>
                                            </Col>
                                            <Col xs={12} sm={6} className="project-link">
                                                <a href="https://github.com/xbtamsing/Clustering-Based-Unsupervised-Learning-Web-Application" rel="noopener noreferrer" target="_blank">
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
                                        <h4>&bull; Implements a k-means based, clustering ML algorithm for a single,
                                            one-dimensional dataset.
                                        </h4>
                                        <h4>
                                            &bull; Registered users can cluster their data by specifying the number of clusters
                                            required and the dataset itself.
                                        </h4>
                                        <h4>
                                            &bull; Scores may be uploaded by either file input or text input.
                                        </h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="project-software">
                                        <h4>HTML <span className="divider">/ </span> CSS <span className="divider">/ </span>
                                         JS <span className="divider">/ </span> PHP <span className="divider">/ </span>
                                          MySQL</h4>
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