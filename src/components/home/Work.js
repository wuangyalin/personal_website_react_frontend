import React from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';
import WorksGallery from './Work-Projects';
import { Container } from 'react-bootstrap';


const Work = ({ title }) => {
    return (
        <React.Fragment>
            <Section id="work" className="myworks">
                <Container >
                    <SectionTitle>
                        {title}
                    </SectionTitle>
                    <WorksGallery />
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default Work;