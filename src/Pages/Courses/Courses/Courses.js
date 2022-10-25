import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideBar from "../../Shared/LeftSideBar/LeftSideBar/LeftSideBar";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <LeftSideBar></LeftSideBar>
        </Col>
        <Col lg="9">This is main content</Col>
      </Row>
    </Container>
  );
};

export default Courses;
