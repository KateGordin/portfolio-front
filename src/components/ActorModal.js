import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/orders/actions";
import { NotificationManager } from "react-notifications";

export default function ActorModal({ actor, onClose }) {
  const dispatch = useDispatch();
  const addMyOneItem = async () => {
    dispatch(await addItemToCart(actor));
    NotificationManager.success("Actor was added to the cart", "Success");
  };

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
        <button onClick={addMyOneItem}>Add to cart</button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
