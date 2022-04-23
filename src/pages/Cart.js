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

export default function Cart() {
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

  useEffect(() => {
    fetchMyOrderItems();
  }, []);

  // const [orderItem, setOrderItem] = useState({
  //   Actor: " ",
  //   Duration: "1 hour",
  //   Price: null,
  //   DateTime: " ",
  // });

  const [orderItems, setOrderItems] = useState([]);

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
        <input type="text" />
      </div>

      {/* <button onClick={() =>  dispatch(orderItems(orderItems)))}>Order</button> */}
    </div>
  );
}
