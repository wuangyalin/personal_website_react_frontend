import React, { useState, useEffect } from 'react';
// import Sections from '../../constants/Sections';
import About from './About';
import Banner from './Banner';
import Skill from './SkillList';
import Work from './Work';
import Contact from './Contact';

// const MySection = (props) => <div>{props.data}</div>;

const sectionComponents = {
    'about': About,
    'banner': Banner,
    'skill': Skill,
    'work': Work,
    'contact': Contact
}

const Body = () => {

    const [sections, setSections] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/sections');
            const body = await result.json();
            setSections(body);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    return (
        isLoaded ?

            <React.Fragment>
                {sections.map((section, index) => {
                    const SingleComponent = React.createElement(sectionComponents[section.id], {
                        title: section.name
                    });
                    return (
                        <React.Fragment key={index}>
                            {/* {section.element} */}
                            {SingleComponent}
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
            :
            <React.Fragment>
                Loading
        </React.Fragment>
    );
};

export default Body;
