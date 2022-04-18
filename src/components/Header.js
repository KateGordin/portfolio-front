import React from "react";
import lucky from "../assets/lucky-green.jpeg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <NavLink end to={"/"}>
        <img
          className="header__logo"
          alt="picture"
          style={{ width: 170 }}
          src={lucky}
        />
      </NavLink>

      <div className="header__buttons">
        <NavLink end to={"/actors"}>
          <button>Actors</button>
        </NavLink>

        <NavLink end to={"/reviews"}>
          <button>Reviews</button>
        </NavLink>

        <NavLink end to={"/login"}>
          <button>Log in</button>
        </NavLink>
      </div>
    </div>
  );
}
