import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

function Cardpage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} lg={12} xl={12} className="mt-3">
            <Row>
              <Col md={3} lg={3} xl={3}>
                <Card>
                  <Card.Body>
                    <p>EARNING (MONTHLY)</p>
                    <h6>$40,000</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} lg={3} xl={3}>
                <Card>
                  <Card.Body>
                    <p>EARNING (ANNUAL)</p>
                    <h6>$215,000</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} lg={3} xl={3}>
                <Card>
                  <Card.Body>
                    <p>Task</p>
                    <h6>50%</h6>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} lg={3} xl={3}>
                <Card>
                  <Card.Body>
                    <p>PENDING REQUEST</p>
                    <h6>18</h6>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={12} xl={12}>
            <Row>
              <Col md={6} lg={6} xl={6}>
                <Row>
                  <Col md={12} lg={12} xl={12} className="mt-3">
                    <Card id="cardscard">
                      <Card.Header>
                        <h5>Default Card Example</h5>
                      </Card.Header>
                      <Card.Body>
                        <p>
                          This card uses Bootstrap's default styling with no
                          utility classes added. Global styles are the only
                          things modifying the look and feel of this default
                          card example.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={12} lg={12} xl={12} className="mt-3">
                    <Card id="cardscard">
                      <Card.Header>
                        <h5>Basic Card Example</h5>
                      </Card.Header>
                      <Card.Body>
                        <p>
                          The styling for this basic card example is created by
                          using default Bootstrap utility classes. By using
                          utility classes, the style of the card component can
                          be easily modified with no need for any custom CSS!.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Row>
                  <Col md={12} lg={12} xl={12} className="mt-3">
                    <Card id="cardscard1">
                      <Card.Header>
                        <h5>Dropdown Card Example</h5>
                      </Card.Header>
                      <Card.Body>
                        <p>
                        Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={12} lg={12} xl={12} className="mt-3">
                    <Card id="cardscard2">
                      <Card.Header>
                        <h5>Basic Card Example</h5>
                      </Card.Header>
                      <Card.Body>
                        <p>
                          The styling for this basic card example is created by
                          using default Bootstrap utility classes. By using
                          utility classes, the style of the card component can
                          be easily modified with no need for any custom CSS!.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cardpage;
