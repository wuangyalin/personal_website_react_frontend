import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from '../../styled-components/HomeStyles';
import { Container, Row, Col } from 'react-bootstrap';
// import Skills from '../../constants/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import SkillListContact from './SkillList-Contact';

library.add(fab, faDatabase, faMobileAlt);


const Skill = ({ title }) => {

    const [skills, setSkills] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/skills');
            const body = await result.json();
            setSkills(body);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    return (
        isLoaded ? 
        <React.Fragment>
            <Section id="skill" className="text-gradient skillList">
                <Container>
                    <SectionTitle>
                        {title}
                    </SectionTitle>
                    <Row>
                        {skills.map((skill, i) => {
                            return (<Col md="4" key={i}>
                                <FontAwesomeIcon className='icon' icon={[skill.iconType, skill.icon]} size={skill.size}></FontAwesomeIcon>
                                <h3 className="heading">{skill.name}</h3>
                                <p>{skill.content}</p>
                            </Col>);
                        })}
                    </Row>
                    <hr />
                    <SkillListContact />
                </Container>
            </Section>
        </React.Fragment>
        :
        <React.Fragment>
            Loading...
        </React.Fragment>
    );
};

export default Skill;