import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Details = (props) => {
    const { title, img, price } = props.course;
    return (
        <>
            <Col lg={4}>
                <Card className='card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">price: {price}</small>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default Details;