import React from "react";
import { Card } from "react-bootstrap";
export const New = ({ variant, body, nivel, titulo, autor }) => (

  <Card border={variant + " m-2 mt-5"} >
    <Card.Header>{nivel}</Card.Header>
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card.Body>
    <Card.Footer>{autor}</Card.Footer>
  </Card>
);
