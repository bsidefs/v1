// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/sideMenu.css';
import Navigation from './Navigation';

// --- SIDE MENU ---
class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened
        };
    }
    render() {
        if (this.props.opened) {
            return(
                <Container id="side-menu-wrapper">
                    <Row>
                        <Col>
                            <Navigation />
                        </Col>
                    </Row>
                </Container>
            );
        }
        else {
            return null;
        }
    }
}

export default SideMenu;