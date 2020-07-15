import React from 'react';
import { GreyImg } from '../../styled-components/HomeStyles';
import { Row } from 'react-bootstrap';


const AboutImage = () => (
    <React.Fragment>
        <Row >
            <GreyImg src="https://lukegong.com/wp-content/uploads/2018/01/mmexport1504492387368.jpg" width="30%" className="image img-fluid img-circl mx-auto d-block" alt="This is me" />
        </Row>
    </React.Fragment>
);

export default AboutImage;


