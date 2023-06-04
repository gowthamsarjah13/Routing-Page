import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function FournotfourPage(){
    return(
       <div>
           <Container className="fournotparent mt-4 text-center">
               <Row>
                  <Col md={12} lg={12} xl={12}>
                    <h1><b>404</b></h1>
                  </Col>
                  <Col md={12} lg={12} xl={12}>
                    <h5>Page not Found</h5>
                  </Col>
               </Row>
               <Row className="mt-4">
                  <Col md={12} lg={12} xl={12}>
                    <article style={{color:"gray"}}>It look like you found a glitch in the matrix...</article>
                  </Col>
                  <Col md={12} lg={12} xl={12}>
                  <a href="#" class="link-primary">⬅️Back to the dashboard</a>
                  </Col>
               </Row>
           </Container>
       </div>
    )
}

export default FournotfourPage;