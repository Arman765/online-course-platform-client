import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const Course = () => {
  const courses = useLoaderData();

  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg="3" className="g-4">
          {courses?.map((course) => (
            <div key={course.id}>
              <Col>
                <Card>
                  <Card.Img variant="top" src={course.picture} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                      <div>
                        <p>{course.course_tutor}</p>
                        <p>{course.price}</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Course;
