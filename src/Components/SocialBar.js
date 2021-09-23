// --- IMPORTS ---
import React from 'react';
import { Col } from 'react-bootstrap';
import '../Stylesheets/socialBar.css';
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

// --- SOCIAL BAR ---
class SocialBar extends React.Component {
    render() {
        return(
            <Col md={12} id="social-wrapper">
                <ul id="socials">
                    <li><a href="https://github.com/xbtamsing" rel="noopener noreferrer" target="_blank">
                            <IconContext.Provider value={{ color: "#CCC", size: "1.3rem" }}>
                            <div>
                                <FaGithub />
                            </div>
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/brian-tamsing/" rel="noopener noreferrer" target="_blank">
                            <IconContext.Provider value={{ color: "#CCC", size: "1.3rem" }}>
                            <div>
                                <FaLinkedinIn />
                            </div>
                            </IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </Col>
        );
    }
}

export default SocialBar;