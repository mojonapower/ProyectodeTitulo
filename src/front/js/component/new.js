import React from "react";
import { Card, Button } from "react-bootstrap";
export const New = ({ variant, body, nivel, titulo }) => (
  <Card className="my-2">
    <Card.Header>{nivel}</Card.Header>
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>{body}</Card.Text>

      <Button variant={variant}>Marcar como Leída</Button>
    </Card.Body>
  </Card>
);
