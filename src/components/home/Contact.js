import React from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Contact-Form';
import ContactInfo from './Contact-Info';

const Contact = ({ title }) => {
    return (
        <React.Fragment>
            <Section id="contact">
                <Container>
                    <SectionTitle>
                        {title}
                    </SectionTitle>
                    <Row>
                        <Col md="8">
                            <ContactForm />
                        </Col>
                        <Col md="4">
                            <ContactInfo />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default Contact;