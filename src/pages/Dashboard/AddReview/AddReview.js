import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (e) => {
    e.preventDefault();

    const name = user?.displayName;
    const email = user?.email;
    const reviewtxt = e.target.review.value;
    const location = e.target.location.value;
    const rating = e.target.rating.value;

    const review = { name, email, reviewtxt, location, rating };
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Thanks for your review..!");
      });
    e.target.reset();
  };
  return (
    <div className="md:px-20 mb-10">
      <h1 className=" my-10 text-center">Add Your Review</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-base-100 p-5 rounded-xl">
          <form action="" onSubmit={handleReview}>
            <div className="grid grid-cols-1 gap-5 justify-center">
              <input
                type="text"
                value={user?.displayName}
                disabled
                class="input w-full  bg-slate-50"
              />
              <input
                type="text"
                value={user?.email}
                disabled
                class="input w-full  bg-slate-50"
              />
              <input
                type="text"
                name="location"
                required
                placeholder="Your location"
                class="input w-full  bg-slate-50"
              />
              <select required name="rating" class="select w-full  bg-slate-50">
                <option disabled selected>
                  Rate us
                </option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
            <div className="mt-4 ">
              <textarea
                class="textarea"
                name="review"
                className="bg-slate-50 w-full rounded-lg h-28 resize-none p-5"
                placeholder="Type your opinion here."
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary px-5 mt-4" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://media.istockphoto.com/photos/close-up-on-customer-man-hand-pressing-on-smartphone-screen-with-five-picture-id1303530194?b=1&k=20&m=1303530194&s=170667a&w=0&h=ukLDaFjMtkDjRMBX5sIx027Eu7OKYgaaEc5DyKFL5fc="
            alt=""
          />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddReview;
