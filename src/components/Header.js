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

        {token ? (
          <div>
            <button onClick={logOutButton}>Log out</button>

            <NavLink end to={"/cart"}>
              <FaShoppingCart size={27} />
            </NavLink>
            <span style={{ fontWeight: "bold", color: "white" }}>
              {cart && cart.orderItems.length}
            </span>
          </div>
        ) : (
          <>
            <NavLink end to={"/login"}>
              <button>Log in</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
