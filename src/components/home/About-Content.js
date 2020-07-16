import React from 'react';
import { Link } from "react-scroll";
import { Row, Col } from 'react-bootstrap';


const AboutContent = () => (
    <React.Fragment>
        <Row>
            <Col sm="12" className="text-left">
                <p>Hello guys my name is Xun(Luke) Gong, I was born in China and now living in Sydney. I graduated from the university of Sydney in 2015 and my degree is Master of Information technology in software engineering.</p>
                <p>Currently working in an digital agency as a PHP web Developer. I understand a lot of aspects relate to programming not only PHP, but also in frontend developing such as Html/CSS, bootstrap and JavaScript. Keen to learn cut-edge technologies like AI, VR and new techs.</p>
                <p>Interested me? Click <Link to="contact" smooth={true} href="#">Here</Link> to know more about me!</p>
            </Col>
        </Row>
    </React.Fragment>
);

export default AboutContent;
