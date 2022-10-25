import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Faq = () => {
  return (
    <div>
      <Container className="mt-5">
        <div className="p-3">
          <p className="fs-3 text-center text-primary ">
            Frequently Asked Questions
          </p>
        </div>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p className="fs-5">What is JSX?</p>
            </Accordion.Header>
            <Accordion.Body>
              JSX is a syntax extension of JavaScript. It is used with React to
              describe what the user interface should look like. By using JSX,
              we can write HTML structures in the same file that contains
              JavaScript code.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <p className="fs-5">What is the virtual DOM?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                DOM stands for Document Object Model. The DOM represents an HTML
                document with a logical tree structure. Each branch of the tree
                ends in a node, and each node contains objects.
              </p>
              <p>
                React keeps a lightweight representation of the real DOM in the
                memory, and that is known as the virtual DOM. When the state of
                an object changes, the virtual DOM changes only that object in
                the real DOM, rather than updating all the objects. The
                following are some of the most frequently asked react interview
                questions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              <p className="fs-5">What are the components in React?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Components are the building blocks of any React application, and
                a single app usually consists of multiple components. A
                component is essentially a piece of the user interface. It
                splits the user interface into independent, reusable parts that
                can be processed separately.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <p className="fs-5">What is Bootstrap used for?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Bootstrap is a free, open source front-end development framework
                for the creation of websites and web apps. Designed to enable
                responsive development of mobile-first websites, Bootstrap
                provides a collection of syntax for template designs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              <p className="fs-5">Which is better SQL or MongoDB?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Which is better SQL or MongoDB? Conclusion. MongoDB is a
                database that is more advanced and capable of handling big data
                with dynamic schema features. SQL Server is an RDBMS that is
                used to manage the relational database system and offers
                end-to-end business data solutions. In the case of unstructured
                data MongoDB is a good choice.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {" "}
              <p className="fs-5">What React Router used for?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                What React Router used for? React Router is a standard library
                for routing in React. It enables the navigation among views of
                various components in a React Application, allows changing the
                browser URL, and keeps the UI in sync with the URL.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
