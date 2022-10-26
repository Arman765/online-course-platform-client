import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course_detail = useLoaderData();
  const { id, picture, price, title, course_tutor } = course_detail;
  // console.log(picture, price, title);

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <div className="mb-5">
        <Button variant="info" size="lg" className="fw-bold">
          Download Pdf
        </Button>
      </div>
      <div className="w-25 h-25">
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <div>
                <p>Author : {course_tutor}</p>
                <p>Price : {price}</p>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default CourseDetails;
