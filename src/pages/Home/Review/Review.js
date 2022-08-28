import React, { useEffect, useState } from "react";
import ReviewContainer from "./ReviewContainer";

const Review = () => {
  const [reviews, setReiews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReiews(data));
  }, []);
  const homeReviews = reviews.slice(0, 6);
  return (
    <section className="py-10 px-5 md:px-28">
      <div>
        <h1 className="text-3xl font-semibold text-center ">Reviews On Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 ">
        {homeReviews.map((review) => (
          <ReviewContainer key={review._id} review={review}></ReviewContainer>
        ))}
      </div>
    </section>
  );
};

export default Review;
