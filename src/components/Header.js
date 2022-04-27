import React from "react";
import lucky from "../assets/lucky-green.jpeg";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { selectToken } from "../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";
import { selectCart } from "../store/orders/selectors";

export default function Header() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);

  const logOutButton = () => dispatch(logOut());

  return (
    <div className="header">
      <div className="header__nav">
        <NavLink end to={"/"}>
          <img
            className="header__logo"
            alt="logo"
            style={{ width: 170 }}
            src={lucky}
          />
        </NavLink>
        <div className="header__buttons">
          <NavLink end to={"/actors"}>
            <button className="btn-green">Actors</button>
          </NavLink>
          <NavLink end to={"/reviews"}>
            <button className="btn-green">Reviews</button>
          </NavLink>
        </div>
      </div>
      <div className="header__auth">
        <div className="header__auth-buttons">
          {token ? (
            <button className="btn-primary" onClick={logOutButton}>
              Log out
            </button>
          ) : (
            <NavLink end to={"/login"}>
              <button className="btn-primary">Log in</button>
            </NavLink>
          )}
        </div>
        <div className="header__cart">
          {token && (
            <>
              <NavLink end to={"/cart"}>
                <FaShoppingCart size={27} />
              </NavLink>
              <span style={{ fontWeight: "bold", color: "white" }}>
                {" "}
                {cart?.orderItems.length ? cart.orderItems.length : ""}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
