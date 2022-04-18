import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ActorModal({ actor, onClose }) {
  return (
    <Modal show={true} size="lg" centered>
      <Modal.Header>
        <h3>{actor.name}</h3>
      </Modal.Header>

      <Modal.Body>
        <img src={actor.image} style={{ width: 500 }} />
        <h5> About program: {actor.description} </h5>
        <p> Price: {actor.price} € / 1 hour </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
