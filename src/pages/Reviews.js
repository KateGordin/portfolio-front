import React, { useEffect } from "react";
import "./Reviews.scss";
import { useDispatch } from "react-redux";
import { updateReview } from "../store/reviews/actions";

export default function Reviews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateReview("rtr"));
  }, []);

  return (
    <div className="reviews">
      <h3>Reviews from our clients:</h3>
      <form >
          <input type="text" placeholder="Write your review..."></input>
          <button>Submit</button>
      </form>
    </div>
  );
}
