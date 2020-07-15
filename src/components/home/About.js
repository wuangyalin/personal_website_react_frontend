import React from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';
import AboutContent from './About-Content';
import AboutImage from './About-Image';
import AboutSocial from './About-Social';
import { Container } from 'react-bootstrap';


const About = ({title}) => {
    return (
        <React.Fragment>
            <Container>
                <Section id="about">
                    <SectionTitle >
                        {title}
                    </SectionTitle>
                    <AboutContent />
                    <AboutImage />
                    <AboutSocial />
                </Section>
            </Container>
        </React.Fragment>
    );
};

export default About;