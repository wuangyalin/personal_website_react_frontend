import React, { useState } from "react";
import { Projects, PorjectList } from '../../constants/Projects';
import { FilterBtn, SingleProject } from '../../styled-components/HomeStyles';
import { Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'



const WorksGallery = () => {
    const [filters, updateFilters] = useState(Projects);
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })

    const onFilter = event => {
        const {
            target: { value }
        } = event;
        updateFilters(() => {
            return Projects.filter(f => f.type.indexOf(value) >= 0);
        });
    };

    return (
        <React.Fragment>
            <Row>
                <Col md="12" className="button-group filters-button-group">
                    {PorjectList.map((list, i) => {
                        return (
                            <FilterBtn key={i} value={list.type} className="btn-light" onClick={onFilter}>{list.name}</FilterBtn>
                        )
                    })}
                </Col>
            </Row>
            <Row>
                {filters.map((project, id) => {
                    return (
                        <animated.div key={id} style={props}>
                            <Col lg="3" md="4" sm="6" xs="12">
                                <SingleProject>
                                    <img src={project.image} className="img-responsive gallery_image" alt="" />
                                </SingleProject>
                                <hr />
                                <h6 className="galley_title">{project.name}</h6>
                            </Col>
                        </animated.div>

                    );
                })}
            </Row>
        </React.Fragment >
    );

};

export default WorksGallery;
