import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Card } from "react-bootstrap";

function Tablepage() {
  return (
    <div>
      <h1>Tables</h1>
      <Container className="p-2">
        <Row>
          <Col md={12} lg={12} xl={12}>
            <p style={{ color: "grey" }}>
              DataTables is a third party plugin that is used to generate the
              demo table below. For more information about DataTables, please
              visit the{" "}
              <a href="#" class="link-primary">
                official DataTables documentation.
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12} xl={12}>
            <Card>
              <Card.Header><h4 style={{color:"blue"}}>DataTables Example</h4></Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>2</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>3</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>4</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>5</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>6</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>7</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>8</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>9</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>10</td>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tablepage;
