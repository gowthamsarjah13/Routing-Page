import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dogimage from "./pugs7.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginPageRender() {
  return (
    <div className="loginParent">
      <Container>
        <Row className="bg-white">
          <Col md={8} lg={8} xl={8}>
            <img src={Dogimage} className="dogimg" />
          </Col>
          <Col md={4} lg={4} xl={4}>
            <h2>Welcome Back!</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <hr />
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                Login with Google
              </Button>
              <Button variant="primary" size="lg">
                Login with Facebook
              </Button>
            </div>
            <div className="text-center mt-2"><a href="#" class="link-primary">Forget Password?</a></div>
            <div className="text-center mt-2"><a href="#" class="link-primary">Create an account!</a></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPageRender;
