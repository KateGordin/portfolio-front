import React from "react";
import { Modal, Button } from "react-bootstrap";
import { addItemToCart } from "../store/orders/actions";
import { NotificationManager } from "react-notifications";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ActorModal({ actor, onClose }) {
  const token = useSelector(selectToken);
  const [isLoginMessageVisible, showLoginMessage] = useState(false);

  const dispatch = useDispatch();
  const addMyOneItem = async () => {
    if (!token) {
      showLoginMessage(true);
      return;
    }
    dispatch(await addItemToCart(actor));
    NotificationManager.success(
      "🎉 Actor was added to the cart",
      "Success",
      1500
    );
  };

  return (
    <>
      <Modal animation={false} show={true} size="lg" centered>
        <Modal.Header>
          <h3>{actor.name}</h3>
        </Modal.Header>

        <Modal.Body>
          <img src={actor.image} style={{ width: 500 }} />
          <h5> About program: {actor.description} </h5>
          <p> Price: {actor.price} € / 1 hour </p>
        </Modal.Body>
        <Modal.Footer>
          {isLoginMessageVisible && (
            <span style={{ fontWeight: "bold", color: "red" }}>
              Please <NavLink to="/login">login</NavLink> first
            </span>
          )}
          <button onClick={addMyOneItem}>Add to cart</button>
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
