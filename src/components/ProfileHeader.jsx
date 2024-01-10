import React from "react";
import { Container } from "react-bootstrap";
import netflix_logo from "../assets/netflix_logo.png";

function ProfileHeader(props) {
  return (
    <header className="mb-5">
      <Container fluid className="bg-custom1">
        <a href="#" onClick={() => props.callbackDetailPage("main")}>
          <img className="logo-profile" src={netflix_logo} alt="" />
        </a>
      </Container>
    </header>
  );
}
export default ProfileHeader;
