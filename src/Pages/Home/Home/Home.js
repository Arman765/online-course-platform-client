import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import onlineEdu from "../../../assets/home/home.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="mt-5">
            <h1 className="align-text-bottom fs-1 fw-bold">
              <p className="text-info ">FreeDom Online Learning</p>
              <p className="">Can Be Reached,</p>
              <p>From Everywhere</p>
              <p>By Everyone</p>
            </h1>
            <div className="mb-2">
              <Link
                className="text-decoration-none  text-dark btn btn-outline-info fw-bold fs-5"
                to="/courses"
              >
                Courses
              </Link>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              className="img-fluid mt-5"
              src={onlineEdu}
              alt="onlineEdu"
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
