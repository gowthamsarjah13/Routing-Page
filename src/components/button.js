import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";




function ButtonPageRender(){


    return(
        <div>
           <Container fluid>
                  <Row>
                       <h2>Buttons</h2>
                      <Col md={6} lg={6} xl={6}>
                           <Row>
                              <Col md={12} lg={12} xl={12} className="mt-3">
                                    <Card id="cardbutton">
                                        <Card.Header><h5>circle Button</h5></Card.Header>
                                        <Card.Body></Card.Body>
                                    </Card>
                                </Col> 
                              <Col md={12} lg={12} xl={12} className="mt-3">
                                    <Card id="cardbutton">
                                        <Card.Header><h5>circle Button</h5></Card.Header>
                                        <Card.Body></Card.Body>
                                    </Card>
                                </Col> 
                           </Row>   
                      </Col>
                      <Col md={6} lg={6} xl={6} className="mt-3">
                                    <Card id="cardbutton2">
                                        <Card.Header><h5>Split Buttons with Icon</h5></Card.Header>
                                        <Card.Body></Card.Body>
                                    </Card>
                      </Col>
                  </Row>
            </Container>              
        </div>
    )
}

export default ButtonPageRender;