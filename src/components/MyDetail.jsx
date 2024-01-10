import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import { Col, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentArea from "./CommentArea";

function MyDetail(props) {
  console.log(props.bookObj);

  const [commentUpdate, setCommentUpdate] = useState(false);

  useEffect(() => {
    console.log("CommentAreaComp aggiornata!");
  }, [commentUpdate]);

  function handleUpdate() {
    setCommentUpdate((prev) => !prev);
  }

  return (
    <Row className=" justify-content-center min-vh-100">
      <Col xs={4}>
        <CardComp book={props.bookObj} />
      </Col>
      <Col xs={12}>
        <AddComment bookObj={props.bookObj} callbackUpdate={handleUpdate} />
        <CommentArea bookObj={props.bookObj} update={commentUpdate} />
      </Col>
    </Row>
  );
}
export default MyDetail;
