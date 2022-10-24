import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import onlineEdu from "../../../assets/home/home.jpg";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="">
            <h1 className="align-text-bottom fs-1">
              Online <span className="text-primary">Learning</span>
            </h1>
            <div className="mb-2">
              <Button variant="primary" size="lg">
                Courses
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img className="img-fluid" src={onlineEdu} alt="onlineEdu"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
