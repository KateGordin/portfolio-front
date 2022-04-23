import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Cart.scss";
import DatePicker from "react-datepicker";
import { selectOrders } from "../store/orders/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/orders/actions";
import { selectCart } from "../store/orders/selectors";
import { deleteOrderItem } from "../store/orders/actions";
import { submitOrder } from "../store/orders/actions";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function Cart() {
  const [myEventName, setEventName] = useState(" ");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  console.log("cart", cart);
  const fetchMyOrderItems = async () => {
    const items = dispatch(await fetchOrder());
    console.log("items", items);
  };

  //delete one order item from cart
  const deleteMyOrderItem = async (id) => {
    dispatch(await deleteOrderItem(id));
  };

  //submit and clear the state
  const submitOrderAndClearState = async () => {
    dispatch(await submitOrder(cart.id, myEventName));
    setEventName("");
    navigate("/");
    NotificationManager.success(
      "Check your e-mail",
      "Order successfully submitted"
    );
  };

  useEffect(() => {
    fetchMyOrderItems();
  }, []);

  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container">
      <h4>Birthday cart</h4>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Actors</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Date and Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cart &&
            cart.orderItems.map((orderItem, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{orderItem.actor.name}</td>
                <td>1 hour</td>
                <td>{orderItem.actor.description} €</td>
                <td>6 of May 2022, 17:00</td>
                <td>
                  <button onClick={() => deleteMyOrderItem(orderItem.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}

      <div>
        <label>Event Name</label>
        <input
          type="text"
          value={myEventName}
          onInput={(e) => setEventName(e.target.value)}
        />
      </div>

      <button onClick={submitOrderAndClearState}>Order</button>
    </div>
  );
}
