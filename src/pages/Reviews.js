import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../store/reviews/actions";
import { selectReviews } from "../store/reviews/selectors";

export default function Reviews() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  console.log("reviews", reviews);
  const [review, setReview] = useState("");

  const submit = (event) => {
    event.preventDefault();
    dispatch(updateReview(review));
    setReview(" ");
  };

  return (
    <div className="reviews">
      <form onSubmit={submit}>
        <h3>Reviews from our clients:</h3>
        {reviews.map((oneReview) => (
          <div key={oneReview.id}>
            <h4>{oneReview.review}</h4>
          </div>
        ))}
        <p>
          <label>
            <input
              type="text"
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
