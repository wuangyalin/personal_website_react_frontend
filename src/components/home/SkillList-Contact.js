import React from 'react';
import { Section } from '../../styled-components/HomeStyles';
import { Link } from "react-scroll";


const SkillListContact = () => (
    <React.Fragment>
        <Section>
            <p className="lead">Would you like to know more or just discuss something?</p>
            <Link to="contact" smooth={true} href="#" className="btn btn-light btn-lg">Contact me</Link>
        </Section>
    </React.Fragment>
);

export default SkillListContact;


