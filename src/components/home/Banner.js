import React from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';

const Banner = ({ title }) => {
    return (
        <React.Fragment>
            <Section id="banner">
                <SectionTitle>
                    {title}
                </SectionTitle>
            </Section>
        </React.Fragment>
    );
};

export default Banner;