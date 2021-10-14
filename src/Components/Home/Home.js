import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Course from '../Course/Course';
import { Button } from 'react-bootstrap';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [courses] = useCourses();
    return (
        <div className='course-container'>
            <div className="course_heading">
                <h1>Learn Our <span>Courses</span> </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div>
                <Container>
                    <CardGroup>
                        {
                            courses.slice(0, 6).map(course => <Course
                                key={course.key}
                                course={course}>
                            </Course>)
                        }
                    </CardGroup>
                    <NavLink to="/services">
                        <Button>See More Services</Button>
                    </NavLink>
                </Container>
            </div>
        </div>
    );
};

export default Home;