import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';



library.add(faUser, faPhone, faEnvelope);

const htmlContent = (p)=>{
    switch(p.type){
        case 'email':
            return <a href={"mailto:" + p.content}>{p.content}</a>
        case 'phone':
            return <a href={"tel:" + p.content}>{p.content}</a>
        default:
            return p.content;
    }
}

const ContactInfo = ({ personalInfo }) => {
    return (
        <React.Fragment>
            {personalInfo.map(p => {
                
                return (
                    <Col key={p.type}>
                        <label className="label">
                            <FontAwesomeIcon icon={p.icon} ></FontAwesomeIcon>
                            &nbsp;
                            {htmlContent(p)}
                        </label>
                    </Col>);
            })}

        </React.Fragment>
    );
};

export default ContactInfo;