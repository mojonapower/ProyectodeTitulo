import React from "react";
import { Card } from "react-bootstrap";
export const New = ({ variant, body, nivel, titulo }) => (

  <Card border={variant + " m-2 mt-5"} style={{ width: '18rem' }}>
    <Card.Header>{nivel}</Card.Header>
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>{body}</Card.Text>

    </Card.Body>
  </Card>
);
