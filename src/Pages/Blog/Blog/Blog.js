import React from "react";
import { Button, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ReactImg from "../../../assets/course/React.png";

const Blog = () => {
  return (
    <div className="d-flex flex-column justify-content-center mt-5">
      <div className="card mb-3 w-75 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ReactImg}
              className="img-fluid rounded-start w-75 h-auto"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">What is cors?</h5>
              <p className="card-text">
                CORS stands for Cross-Origin Resource Sharing. It allows us to
                relax the security applied to an API. This is done by bypassing
                the Access-Control-Allow-Origin headers, which specify which
                origins can access the API. In other words, CORS is a browser
                security feature that restricts cross-origin HTTP requests with
                other servers and specifies which domains access your resources.
              </p>
              <p className="card-text">
                <Button variant="outline-primary">More</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 w-75 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ReactImg}
              className="img-fluid rounded-start w-75 h-auto"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h5>
              <p className="card-text">
                Firebase Authentication aims to make building secure
                authentication systems easy, while improving the sign-in and
                onboarding experience for end users. It provides an end-to-end
                identity solution, supporting email and password accounts, phone
                auth, and Google, Twitter, Facebook, and GitHub login, and more.
              </p>
              <p className="card-text">
                12 User Authentication Platforms [Auth0, Firebase Alternatives]
                STYTCH. Ory. Supabase. Okta. PingIdentity. Keycloak. Frontegg.
                Authress.
              </p>
              <p className="card-text">
                <Button variant="outline-primary">More</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 w-75 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ReactImg}
              className="img-fluid rounded-start w-75 h-auto"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">
                How does the private route work?
              </h5>
              <p className="card-text">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
              <p className="card-text">
                <Button variant="outline-primary">More</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 w-75 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ReactImg}
              className="img-fluid rounded-start w-75 h-auto"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">
                What is Node? How does Node work?
              </h5>
              <p className="card-text">
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
              <p className="card-text">
                <Button variant="outline-primary">More</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
