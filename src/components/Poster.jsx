import React from "react";
import { Col } from "react-bootstrap";
function Poster(props) {
  return (
    <Col className={props.responsive}>
      <img src={props.poster} className=" img-fluid" alt="Media0" />
    </Col>
  );
}
export default Poster;
