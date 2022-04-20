import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import "./Cart.scss";
import DatePicker from "react-datepicker";

export default function Cart() {
  const cart = [
    {
      id: 1,
      name: "spiderman",
      description: "very good",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG",
      price: 150,
    },

    {
      id: 2,
      name: "fyok",
      description: "super",
      image:
        "https://ekomfort.ru/wa-data/public/shop/products/22/80/18022/images/18774/18774.970.jpg",
      price: 100,
    },

    {
      id: 3,
      name: "turtles",
      description: "nice",
      image:
        "https://cdn.mos.cms.futurecdn.net/khRipjVa7SEL5ndKogPHjj-1200-80.jpg",
      price: 300,
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

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
          </tr>
        </thead>

        <tbody>
          {cart.map((oneItem, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{oneItem.name}</td>
              <td>1 hour</td>
              <td>{oneItem.price} €</td>
              <td>6 of May 2022, 17:00</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <div>
        <label>Event Name</label>
        <input type="text" />
      </div>

      <button>Order</button>
    </div>
  );
}
