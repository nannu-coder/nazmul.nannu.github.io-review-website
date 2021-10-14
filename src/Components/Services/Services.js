import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Details from '../Details/Details';

const Services = () => {
    const [courses] = useCourses();
    return (
        <div>
            <Container>
                <CardGroup>
                    {
                        courses.map(course => <Details
                            key={course.key}
                            course={course}>
                        </Details>)
                    }
                </CardGroup>
            </Container>
        </div>
    );
};

export default Services;