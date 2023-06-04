import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Card, Image } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import LAPIMAGE from './laptop.png'

function DashboardPage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} lg={12} xl={12} className="mt-2 mb-2">
            <Row>
              <Col md={10} lg={10} xl={10}>
                <h2>Dashboard</h2>
              </Col>
              <Col md={2} lg={2} xl={2}>
                <Badge bg="primary" id="badgedownload">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                    className="download-icon"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  Generate Report
                </Badge>{" "}
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={12} xl={12} className="mt-4">
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
          <Col md={12} lg={12} xl={12} className="mt-4">
            <Row>
              <Col md={8} lg={8} xl={8}>
                <Card>
                  <Card.Header>
                    <h5>Earnings Overview</h5>
                  </Card.Header>
                  <Card.Body id="earnoverview"></Card.Body>
                </Card>
              </Col>
              <Col md={4} lg={4} xl={4}>
                <Card>
                  <Card.Header>
                    <h5>Revenue Resources</h5>
                  </Card.Header>
                  <Card.Body id="earnoverview"></Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={6} xl={6} className="mt-3">
                <Row>
                    <Col md={12} lg={12} xl={12}>
                         <Card>
                            <Card.Header><h5>Project</h5></Card.Header>
                            <Card.Body>
                                 <div className="mt-3"><article>Server Migration</article></div>
                                 <div className="mt-3"><ProgressBar variant="danger" now={20}/></div>
                                 <div className="mt-3"><article>Sale Tracking</article></div>
                                 <div className="mt-3"><ProgressBar variant="warning" now={40}/></div>
                                 <div className="mt-3"><article>customer Database</article></div>
                                 <div className="mt-3"><ProgressBar now={60}/></div>
                                 <div className="mt-3"><article>Payout Details</article></div>
                                 <div className="mt-3"><ProgressBar variant="info" now={80}/></div>
                                 <div className="mt-3"><article>Account Setup</article></div>
                                 <div className="mt-3"><ProgressBar variant="success" now={100}/></div>
                            </Card.Body>
                         </Card>
                    </Col>
                    <Col md={12} lg={12} xl={12} className="mt-3" >
                    <Card>
                            <Card.Body className="cardbodybox">
                                <div className="box bg-primary" ></div>
                                <div className="box bg-secondary" ></div>
                                <div className="box bg-warning" ></div>
                                <div className="box bg-success" ></div>
                                <div className="box bg-light" ></div>
                                <div className="box bg-dark" ></div>
                                <div className="box bg-danger" ></div>
                                <div className="box bg-info" ></div>
                            </Card.Body>
                         </Card>
                    </Col>
                </Row>
          </Col>
          <Col md={6} lg={6} xl={6} className="mt-3">
                 <Row>
                     <Col md={12} lg={12} xl={12}>
                           <Card>
                              <Card.Header><h5>Illustrations</h5></Card.Header>
                              <Card.Body>
                                  <div>
                                    <img src={LAPIMAGE}/>
                                  </div>
                                  <div>
                                    <p>
                                    Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                                    </p>
                                  </div>
                                  <div>
                                  <a href="#" class="link-primary">Browser Illustration on unDraw</a>
                                  </div>
                              </Card.Body>
                           </Card>
                     </Col>
                     <Col md={12} lg={12} xl={12} className="mt-5">
                     <Card>
                              <Card.Header><h5>Development Approach</h5></Card.Header>
                              <Card.Body>
                                  <div>
                                    <p>
                                    SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                                    </p>
                                  </div>
                                  <div>
                                    <p>
                                    Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                                    </p>
                                  </div>
            
                              </Card.Body>
                           </Card>
                     </Col>
                 </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardPage;
