import React, { useState, useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
// import { Projects, PorjectList } from '../../constants/Projects';
import { FilterBtn, SingleProject, GalleryProject, WorksModal } from '../../styled-components/HomeStyles';
import { Row, Col, Modal, Button, Tabs, Tab, ProgressBar } from 'react-bootstrap';
// import { useSpring, animated } from 'react-spring'



const WorksGallery = () => {
    const defaultModalContent = {
        name: '',
        image: '',
        description: '',
        contribution: '',
        percentage: '',
        link: ''
    };
    const [projects, setProjects] = useState({});
    const [projectList, setProjectList] = useState({});
    const [filters, updateFilters] = useState({});
    const [show, setShow] = useState(false);
    const [currentModalContent, updateCurrentModalContent] = useState(defaultModalContent);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const projectsResult = await fetch('api/projects');
            const projectListResult = await fetch('api/projectlist');
            const projectsBody = await projectsResult.json();
            const projectListBody = await projectListResult.json();
            
            setProjects(projectsBody);
            setProjectList(projectListBody);
            updateFilters(projectsBody);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    const handleClose = () => {
        updateCurrentModalContent(() => {
            return defaultModalContent;
        });
        setShow(false);
    };
    const handleShow = event => {
        const clickedIndex = event.target.getAttribute("data-index");
        updateCurrentModalContent(() => {
            return projects[clickedIndex];
        });
        setShow(true);
    };

    // const props = useSpring({ opacity: 1, from: { opacity: 0 } })

    const onFilter = event => {
        const {
            target: { value }
        } = event;
        updateFilters(() => {
            return projects.filter(f => f.type.indexOf(value) >= 0);
        });
    };

    return (
        isLoaded ?
        <React.Fragment>
            <Row>
                <Col md="12" className="button-group filters-button-group">
                    {projectList.map((list, i) => {
                        return (
                            <FilterBtn key={i} value={list.type} className="btn-light" onClick={onFilter}>{list.name}</FilterBtn>
                        )
                    })}
                </Col>
            </Row>
            <Row>
                {filters.map((project, id) => {
                    return (
                        <Col key={id} lg="3" md="4" sm="6" xs="12">
                            <GalleryProject>
                                <img onClick={handleShow} style={{cursor: 'pointer'}} data-index={id} src={project.image} className="img-responsive gallery_image" alt="" />
                            </GalleryProject>
                            <hr />
                            <h6 className="galley_title">{project.name}</h6>
                        </Col>

                    );
                })}
            </Row>

            <WorksModal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{currentModalContent.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-md-center">
                        <SingleProject>
                            <img src={currentModalContent.image} className="gallery_image" alt="" />
                        </SingleProject>
                    </Row>
                    <Row>
                        <Col md="12">
                            <h3>{currentModalContent.name}</h3>
                            <Tabs className="tab-content" defaultActiveKey="description" transition={false} id="noanim-tab-example">
                                <Tab eventKey="description" title="Description">
                                    {ReactHtmlParser(currentModalContent.description)}
                                </Tab>
                                <Tab eventKey="contribution" title="Contribution">
                                    {ReactHtmlParser(currentModalContent.contribution)}
                                </Tab>
                            </Tabs>
                            <ProgressBar now={currentModalContent.percentage} label={`${currentModalContent.percentage}%`} />
                            <br />
                            <div className="bg-inverse text-white">
                                <a href={currentModalContent.link} type="button" rel="noopener noreferrer" target="_blank">See Project</a>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </WorksModal>
        </React.Fragment >
        :
        <React.Fragment>
                Loading...
        </React.Fragment>
    );

};

export default WorksGallery;
