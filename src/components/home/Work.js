import React from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';
import WorksGallery from './Work-Projects';
import { Container } from 'react-bootstrap';


const Work = ({ title }) => {
    return (
        <React.Fragment>
            <Container >
                <Section id="work" className="myworks">
                    <SectionTitle>
                        {title}
                    </SectionTitle>
                    <WorksGallery />
                </Section>
            </Container>
        </React.Fragment>
    );
};

export default Work;