import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';



const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const [inputvalues, setInputValues] = useState({
        contactName: '',
        contactEmail: '',
        contactMessage: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputValues({
            ...inputvalues,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if(form.checkValidity() === true) {
            console.log(inputvalues);
        }
        setValidated(true);
        
    }

    return (
        <React.Fragment>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="contact-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="contactName" placeholder="Enter your name" onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="contact-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="contactEmail" placeholder="Enter your email" onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="contact-message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" name="contactMessage" placeholder="Enter your message" onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide some messages.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    );
};

export default ContactForm;