import React from "react";
import lucky from "../assets/lucky5.png";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { selectToken } from "../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";
import { selectCart } from "../store/orders/selectors";
import { filterActors, RESET_FILTERED_ACTORS } from "../store/actors/actions";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

export default function Header() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchString, setSearchString] = useState("");

  const cart = useSelector(selectCart);

  const logOutButton = () => dispatch(logOut);

  //search for an actor
  const handleSearchField = (e) => {
    e.preventDefault();
    dispatch(filterActors(searchString));
  };

  //to clear the search string when location changes
  useEffect(() => {
    setSearchString("");
  }, [location]);

  //show all actors instead if filtered actors
  const resetFilteredActors = () =>
    dispatch({
      type: RESET_FILTERED_ACTORS,
    });

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
            <button onClick={resetFilteredActors} className="btn-green">
              Actors
            </button>
          </NavLink>
          <NavLink end to={"/reviews"}>
            <button className="btn-green">Reviews</button>
          </NavLink>
        </div>
      </div>

      <div>
        {location.pathname === "/actors" && (
          <Paper
            component="form"
            onSubmit={handleSearchField}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              marginTop: "35px",
              marginRight: "20px",
              width: 300,
              height: 30,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search actor..."
              inputProps={{ "aria-label": "search google maps" }}
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        )}
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
              <span style={{ fontWeight: "bold", color: "black" }}>
                {cart?.orderItems.length ? cart.orderItems.length : ""}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
