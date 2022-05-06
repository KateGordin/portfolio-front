import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Cart.scss";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../store/orders/selectors";
import { deleteOrderItem } from "../store/orders/actions";
import { submitOrder } from "../store/orders/actions";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { selectToken } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

export default function Cart() {
  const token = useSelector(selectToken);

  const [myEventName, setEventName] = useState(" ");
  const navigate = useNavigate();

  //my text in email to actors
  const [textInEmail, setTextInEmail] = useState(" ");

  //sum of all actors
  const [sum, setSum] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  console.log("cart", cart);
  //delete one order item from cart
  const deleteMyOrderItem = async (id) => {
    dispatch(await deleteOrderItem(id));
  };

  //submit and clear the state
  const submitOrderAndClearState = async () => {
    dispatch(await submitOrder(cart.id, myEventName, textInEmail));
    setEventName("");
    setTextInEmail("");
    navigate("/");
    NotificationManager.success(
      "We will answer you soon",
      "🥳 Order successfully submitted "
    );
    dispatch(getUserWithStoredToken());
  };

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (cart) {
      let sumInCart = 0;
      cart.orderItems.forEach(
        (orderItem) => (sumInCart += orderItem.actor.price)
      );
      setSum(sumInCart);
    }
  }, [cart]);

  // const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="container">
        <h4>Birthday cart</h4>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Actors</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cart &&
              cart.orderItems.map((orderItem, index) => (
                <tr key={orderItem.id}>
                  <td>{index + 1}</td>
                  <td>{orderItem.actor.name}</td>
                  <td>1 hour</td>
                  <td>{orderItem.actor.price} €</td>
                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => deleteMyOrderItem(orderItem.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <div style={{ fontWeight: "bold", fontSize: "150%" }}>
            Total price: {sum} €
          </div>
        </Table>

        {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}

        <div>
          <label>Event Name: </label>
          <input
            type="text"
            value={myEventName}
            onInput={(e) => setEventName(e.target.value)}
          />
          <br></br>
          <label>Add your preferences: </label>
          <input
            type="text"
            value={textInEmail}
            onInput={(e) => setTextInEmail(e.target.value)}
          />
        </div>

        <button className="btn-green" onClick={submitOrderAndClearState}>
          Order
        </button>
      </div>
    </>
  );
}
