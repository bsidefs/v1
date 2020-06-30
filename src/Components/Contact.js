// --- IMPORTS ---
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import '../Stylesheets/contact.css';
import emailjs from 'emailjs-com';

// --- CONTACT ---
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senderFirstName: "",
            senderLastName: "",
            senderMessage: "",
            formIsInvalid: false,
            sendSucceeded: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToastClose = this.handleToastClose.bind(this);
    }
    /**
     * Handles keystrokes in form input to help manage state.
     */
    handleChange(event) {
        switch(event.target.getAttribute("name")) {
            case "senderFirstName": this.setState({senderFirstName: event.target.value});
                break;
            case "senderLastName": this.setState({senderLastName: event.target.value});
                break;
            case "senderMessage": this.setState({senderMessage: event.target.value});
                break;
            default: break;
        }
    }
    /**
     * Handles contact form submission by sending an email through EmailJS.
     */
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.senderFirstName === "" || this.state.senderLastName === ""
            || this.state.senderMessage === "") {
                this.setState({
                    formIsInvalid: true
                });
            }
        else {
            const template_id = "Contact";
            const formName = "#contact-form";
            const userID = "user_iu7MTaEth4wiZBekpIGU1";
            emailjs.sendForm("default_service",template_id,formName,userID)
                .then((response) => {
                    // reset state (triggers a re-rendering to clear the text input fields.)
                    this.setState({
                        senderFirstName: "",
                        senderLastName: "",
                        senderMessage: "",
                        sendSucceeded: true
                    });
                    }, (error) => {
                    console.log(error);
                });
        }
    }
    /**
     * Allows a Toast to be dismissible.
     */
    handleToastClose() {
        this.setState({
            formIsInvalid: false,
            sendSucceeded: false
        });
    }
    render() {
        return(
            <Container id="contact" className="main-content-wrapper">
                <Row>
                    <Col>
                        <Row>
                            <Col id="contact-title">
                                <h1>Contact.<span className="cursor">|</span></h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <form onSubmit={this.handleSubmit} id="contact-form">
                                    <fieldset>
                                        {/* sender's first and last name */}
                                        <Row>
                                            <Col id="sender-information">
                                                <input type="text" name="senderFirstName" value={this.state.senderFirstName} 
                                                    onChange={this.handleChange} placeholder="First name">
                                                </input>
                                                <input type="text" name="senderLastName" value={this.state.senderLastName} 
                                                    onChange={this.handleChange} placeholder="Last name">
                                                </input>
                                            </Col>
                                        </Row>
                                        {/* sender's message */}
                                        <Row>
                                            <Col id="sender-message">
                                                <textarea name="senderMessage" value={this.state.senderMessage} onChange={this.handleChange} 
                                                    placeholder="Say what's up!">
                                                </textarea>
                                            </Col>
                                        </Row>
                                        {/* form input submit */}
                                        <Row>
                                            <Col id="form-submit">
                                                <input type="submit" value="Submit"></input>
                                            </Col>
                                        </Row>
                                    </fieldset>
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Col id="toast-location">
                                <Toast show={this.state.sendSucceeded} onClose={this.handleToastClose}>
                                    <Toast.Header>
                                        <strong className="mr-auto">Success!</strong>
                                        <small>A moment ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Form sent. Thank you!</Toast.Body>
                                </Toast>
                                <Toast show={this.state.formIsInvalid} onClose={this.handleToastClose}>
                                    <Toast.Header>
                                        <strong className="mr-auto">Error!</strong>
                                        <small>A moment ago</small>
                                    </Toast.Header>
                                    <Toast.Body>All fields are required.</Toast.Body>
                                </Toast>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;