// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/sideMenu.css';
import Navigation from './Navigation';

// --- SIDE MENU ---
function SideMenu(props) {
    var body = document.body;
    if (props.status === 'opened')
    {
        body.classList.add("no-scroll")
    }
    else {
        body.classList.remove("no-scroll")
    }
    return(
        <Container className={'side-menu-wrapper ' + props.status }>
            <Row>
                <Col>
                    <Navigation setStatus={props.setStatus} />
                </Col>
            </Row>
        </Container>
    )
}

export default SideMenu;