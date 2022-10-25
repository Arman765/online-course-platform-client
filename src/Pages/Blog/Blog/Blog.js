import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      <Container className="mt-5">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p className="fs-4">What is cors?</p>
            </Accordion.Header>
            <Accordion.Body>
              CORS stands for Cross-Origin Resource Sharing. It allows us to
              relax the security applied to an API. This is done by bypassing
              the Access-Control-Allow-Origin headers, which specify which
              origins can access the API. In other words, CORS is a browser
              security feature that restricts cross-origin HTTP requests with
              other servers and specifies which domains access your resources.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <p className="fs-4">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and more.
              </p>
              <p>
                12 User Authentication Platforms [Auth0, Firebase Alternatives]
                STYTCH. Ory. Supabase. Okta. PingIdentity. Keycloak. Frontegg.
                Authress.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              <p className="fs-4">How does the private route work?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <p className="fs-4">What is Node? How does Node work?</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Node.js is an open-source backend javascript runtime
                environment. It is a used as backend service where javascript
                works on the server-side of the application. This way javascript
                is used on both frontend and backend. Node.js runs on chrome v8
                engine which converts javascript code into machine code, it is
                highly scalable, lightweight, fast, and data-intensive. Node.js
                accepts the request from the clients and sends the response,
                while working with the request node.js handles them with a
                single thread. To operate I/O operations or requests node.js use
                the concept of threads. Thread is a sequence of instructions
                that the server needs to perform. It runs parallel on the server
                to provide the information to multiple clients. Node.js is an
                event loop single-threaded language. It can handle concurrent
                requests with a single thread without blocking it for one
                request.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
