import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Contact-Form';
import ContactInfo from './Contact-Info';
// import PersonalInfo from '../../constants/PersonalInfo';



const Contact = ({ title }) => {
    const [personalInfo, setPersonalInfo] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/personalinfo');
            const body = await result.json();
            setPersonalInfo(body);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    return (
        isLoaded ? 
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
                            <ContactInfo personalInfo={personalInfo} />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </React.Fragment>
        :
        <React.Fragment>
            Loading...
        </React.Fragment>
    );
};

export default Contact;