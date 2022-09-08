import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ManageReviewsContainer = ({ review, index }) => {
  const { _id, name, reviewtxt, rating, location } = review;

  const deleteReview = () => {
    fetch(`https://stark-shelf-45913.herokuapp.com/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Delete successfull.");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{rating}</td>
      <td>{reviewtxt}</td>
      <td>
        <button onClick={deleteReview} className="btn btn-error btn-xs">
          Delete
        </button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default ManageReviewsContainer;
