import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-scroll";
import Sections from '../constants/Sections';

const StyledLink = styled(Link)`
    position: stick;
    &:hover,&.active {
    text-decoration: underline;
    }
`;

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/" >Luke Gong</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {Sections.map((section, i) => {
                                return <StyledLink
                                    key={i}
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-400}
                                    className='nav-link'
                                    href="#"
                                >{section.name}</StyledLink>
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </React.Fragment>

    );
}

export default NavBar;