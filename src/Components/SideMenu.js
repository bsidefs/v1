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
        body.classList.add("no-scroll");
        document.ontouchmove = function(e) {
            e.preventDefault();
        }
    }
    else {
        body.classList.remove("no-scroll");
        document.ontouchmove = function(e) {
            return true;
        }
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