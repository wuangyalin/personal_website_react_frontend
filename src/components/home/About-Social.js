import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SocialLink } from '../../styled-components/HomeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { Row, Col } from 'react-bootstrap';

const ProfileCol = styled(Col)`
    &.profile{
            padding-top: 10px;
        & a{
            color: #666;
        }
    }
    
`;

// add the icons into library
library.add(fab, faDownload);

const AboutSocial = () => {

    const [socials, setSocials] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/socials');
            const body = await result.json();
            setSocials(body);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    return (
        isLoaded ?
            <React.Fragment>
                {socials.map((social, i) => {
                    return (
                        <Row key={i}>
                            <ProfileCol className="profile mx-auto d-block">
                                <SocialLink className={social.id}>
                                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={[social.iconType, social.icon]} size={social.size}></FontAwesomeIcon> {social.name}
                                    </a>
                                </SocialLink>
                            </ProfileCol>
                        </Row>
                    )
                })}
            </React.Fragment>
            :
            <React.Fragment>loading...</React.Fragment>
    )
};


export default AboutSocial;
