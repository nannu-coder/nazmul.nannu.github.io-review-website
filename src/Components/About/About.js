import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../Images/team.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='about-title'>
                            <h1>Hi! We Are <span>EduGlobal</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='about-img'>
                            <Image src={img} fluid />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;