import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Course from "../../Course/Course/Course";
import LeftSideBar from "../../Shared/LeftSideBar/LeftSideBar/LeftSideBar";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <LeftSideBar></LeftSideBar>
        </Col>
        <Col lg="9">
          <Course></Course>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
