import React from "react";
import lucky from "../assets/lucky-green.jpeg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img alt="picture" style={{ width: 170 }} src={lucky} />
      <button>Actors</button>
      <button>Reviews</button>
      <button>Log in</button>
    </div>
  );
}
