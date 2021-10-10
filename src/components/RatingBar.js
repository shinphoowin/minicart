import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({ rateInfo }) => {
  const { rate } = rateInfo;
  return (
    <ReactStars
      count={5}
      //onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      value={rate}
    />
  );
};

export default RatingBar;
