import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Poster(props) {
  return (
    <Col className={props.responsive}>
      <Link to={`/`}>
        <img src={props.poster} className=" img-fluid" alt="Media0" />
      </Link>
    </Col>
  );
}
export default Poster;
