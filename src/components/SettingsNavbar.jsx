import React from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import logo from "../assets/netflix_logo.png";

const SettingsNavbar = (props) => {
  return (
    <header className="bg-darkgray mb-5">
      <div className="row">
        <div className="col-12">
          <Navbar bg="transparent" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand className="text-white" href="#">
                <img src={logo} alt="logo" className="logo" onClick={() => props.callbackDetailPage("main")} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Nav.Link href="#" onClick={() => props.callbackDetailPage("main")}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#">TV Shows</Nav.Link>
                  <Nav.Link href="#">Movies</Nav.Link>
                  <Nav.Link href="#">Recently added</Nav.Link>
                  <Nav.Link href="#">My list</Nav.Link>
                </Nav>
                <div id="rightbar" className="d-none d-lg-flex justify-content-around align-items-center">
                  <i className="bi bi-search text-white px-3"></i>
                  <p className="text-white px-3 m-0">KIDS</p>
                  <i className="bi bi-bell-fill text-white px-3"></i>
                  <div className="buttonsettings">
                    <div className="btn-group">
                      <Button variant="darkgray" size="sm">
                        <img className="avatar px-3" src={avatar} alt="avatar" />
                      </Button>
                      <Dropdown>
                        <Dropdown.Toggle split variant="darkgray" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                          <Dropdown.Item href="#" onClick={() => props.callbackDetailPage("profile")}>
                            Profile
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onClick={() => props.callbackDetailPage("settings")}>
                            Settings
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default SettingsNavbar;
