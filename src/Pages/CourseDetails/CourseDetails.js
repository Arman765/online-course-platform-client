import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course_detail = useLoaderData();
  const { id, picture, price, title, course_tutor } = course_detail;
  // console.log(picture, price, title);

  return (
    <Container className="w-25 h-25 mt-5">
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
    </Container>
  );
};

export default CourseDetails;
