import React, { Children, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function LandingMainPage({Children}) {

    const history = useHistory();
    const [button,setbutton] = useState(false);
    const [cards,setCards] = useState(false);

    const handlechange = (e) =>{
        if(e.target.value === "Button"){
          setbutton(true)
          history.push("/buttons")
        }
        else if(e.target.value === "Card"){
          setCards(true)
          history.push("/cards")
        }
        else{
          setbutton(false)
          setCards(false)
        }
    }

    const [login,setLogin] = useState(false);
    const [fournotfour,setFournotfour] = useState(false);
    const [blankpage,setBlankpage] = useState(false);

    const eventhandle = (e) => {
         if(e.target.value === "Login"){
          setLogin(true)
          history.push("/logins")
         }
         else if(e.target.value === "404"){
          setFournotfour(true)
          history.push("/fournotfour")
         }
         else if(e.target.value === "blankpage"){
          setBlankpage(true)
          history.push("/blankpage")
         }
    }

  return (
    <div>
      <Container fluid>
        <Row className="parent">
          <Col md={2} xl={2} lg={2} className="child1">
            <Row>
              <Col md={12} xl={12} lg={12}>
                <button class="btn" onClick={()=>history.push("/dashboard")}>
                  <h5>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-emoji-wink"
                      viewBox="0 0 16 16"
                      className="admin-icon"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z" />
                    </svg>
                    SB ADMIN<sup>2</sup>
                  </h5>
                </button>
                <hr />
              </Col>
              <Col md={12} xl={12} lg={12}>
                <button className="btn dash-button" onClick={()=>history.push("/dashboard")}>
                  <h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-speedometer2"
                      viewBox="0 0 16 16"
                      className="speed-meter"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                      />
                    </svg>
                    Dashboard
                  </h5>
                </button>
                <hr />
              </Col>
              <Col md={12} xl={12} lg={12}>
                <article style={{ color: "#92a9e9" }}>INTERFACE</article>
                <select class="form-select" onChange={handlechange}>
                  <option value="Button">Button</option>
                  <option value="Card">Card</option>
                </select>
                <select class="form-select">
                  <option>colors</option>
                  <option>Borders</option>
                  <option>Animations</option>
                  <option>other</option>
                </select>
                <hr />
              </Col>
              <Col md={12} xl={12} lg={12}>
                <article style={{ color: "#92a9e9" }}>ADDONS</article>
                <select class="form-select" onChange={eventhandle}>
                  <option value={"Login"}>Login</option>
                  <option>Register</option>
                  <option>Forget Password</option>
                  <option value={"404"}>404 Page</option>
                  <option value={"blankpage"}>Blank Page</option>
                </select>
              </Col>
              <Col md={12} xl={12} lg={12}>
                <button class="btn">
                  <h5 className="chart-htag">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-graph-down"
                      viewBox="0 0 16 16"
                      className="chart-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z"
                      />
                    </svg>
                    Charts
                  </h5>
                </button>
              </Col>
              <Col md={12} xl={12} lg={12}>
                <button class="btn" onClick={()=>history.push("/tablepage")}>
                  <h5 className="chart-htag">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-table"
                      viewBox="0 0 16 16"
                      className="table-icon"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                    </svg>
                    Tables
                  </h5>
                </button>
                <hr/>
              </Col>
            </Row>
          </Col>
          <Col md={10} xl={10} lg={10} className="child2">
            <Row>
              <Col md={12} lg={12} xl={12} className="navi-col">
                <Row>
                  <Col md={8} lg={8} xl={8}>
                    <div className="searbar-parent">
                      <input
                        class="btn btn-outline-secondary"
                        type="text"
                        placeholder="search for..."
                      />
                      <input class="btn btn-primary" type="submit" />
                    </div>
                  </Col>
                  <Col md={2} lg={2} xl={2}>
                    <div className="navi-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-bell"
                        viewBox="0 0 16 16"
                        className="svg-bell"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </div>
                  </Col>
                  <Col md={2} lg={2} xl={2}>
                    <div className="navi-end">
                      <article>Douglas McGee</article>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                        className="navi-person-icon"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12} lg={12} xl={12} className="children-col">
                 <Row>
                     <Col md={12} lg={12} xl={12}>
                         {Children}
                      </Col>
                     <Col md={12} lg={12} xl={12} className="mt-4 bg-white p-3">
                        <footer className="text-center">
                           <article className="mt-2">copyright ©️ Your website 2023</article>
                        </footer>
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

export default LandingMainPage;
