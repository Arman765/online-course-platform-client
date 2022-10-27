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
        <Col sm="12" lg="6">
          <div className="mt-5">
            <h1 className="align-text-bottom fs-1 fw-bold">
              <p className="text-info ">FreeDom Online Learning</p>
              <div>
                <p className="text-info ">Can Be Reached</p>
                <p className="text-info ">From Everywhere,</p>
                <p className="text-info ">By Everyone.</p>
              </div>
            </h1>
            <div className="mb-2">
              <Link
                className="text-decoration-none   btn btn-outline-warning fw-bold fs-5 text-info "
                to="/courses"
              >
                Courses
              </Link>
            </div>
          </div>
        </Col>
        <Col sm="12" lg="6">
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
