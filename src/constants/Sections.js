import React from 'react';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Skill from '../components/home/SkillList';
import Work from '../components/home/Work';
import Contact from '../components/home/Contact';


const Sections = [
    {
        name: 'Home',
        id: 'banner',
        element: <Banner title="Home" />,
    },
    {
        name: 'About Me',
        id: 'about',
        element: <About title="About Me" />,
    },
    {
        name: 'What I can do',
        id: 'skill',
        element: <Skill title="What I can do" />,
    },
    {
        name: 'My Works',
        id: 'work',
        element: <Work title="My Works" />,
    },
    {
        name: 'Contact Me',
        id: 'contact',
        element: <Contact title="Contact Me" />,
    },
];

export default Sections;