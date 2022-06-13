import React from "react";
import "./Reviews.scss";
import { useDispatch } from "react-redux";
import {updateReview} from "../store/reviews/actions";

export default function Reviews() {
  const dispatch = useDispatch();
  dispatch(updateReview('rtr'));
  return (
    <div className="reviews">
      <h3>Reviews from our clients:</h3>
    </div>
  );
}
