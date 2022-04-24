import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Actors from "./pages/Actors";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "@reach/dialog/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./store/user/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUser);
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NotificationContainer />
    </div>
  );
}

export default App;
