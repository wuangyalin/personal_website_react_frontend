import React from 'react';
import Sections from '../../constants/Sections';


const Body = () => {
    return (
        <React.Fragment>
            {Sections.map((section, index) => {
                return (
                    <React.Fragment key={index}>
                        {section.element}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

export default Body;
