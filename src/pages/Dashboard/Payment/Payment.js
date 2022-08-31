import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading.js";
import bkash from "../../../img/bKash-Dial-Payment.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://stark-shelf-45913.herokuapp.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    const bkashNumber = e.target.number.value;
    const transId = e.target.transId.value;
    console.log(bkashNumber);

    const productName = order.productName;

    const customerNamer = order.customerNamer;
    const userEmail = order.user;
    const orderQuantity = order.orderQuantity;
    const totalCost = order.totalCost;
    const address = order.address;

    const paymentData = {
      productName,
      bkashNumber,
      transId,
      customerNamer,
      userEmail,
      orderQuantity,
      totalCost,
      address,
    };
    fetch(`https://stark-shelf-45913.herokuapp.com/payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your payment is done..!");
      });
    e.target.reset();
  };
  return (
    <div>
      <div className="text-center py-5">
        <h1
          className="text-xl font-bold uppercase text-blue-300"
          style={{ fontFamily: "Macondo" }}
        >
          Payment leaderboard
        </h1>
      </div>
      <div className=" md:px-20 pb-20 bg-base-100">
        <div className="card bg-gray-500 text-gray-200 mb-3 rounded-none ">
          <div class=" p-2 flex items-center">
            <div>
              <img className="w-36 mr-5" src={order.img} alt="" />
            </div>
            <div>
              <h2>
                <span className="text-sm">
                  Hello, {order.customerNamer}
                  <br></br>
                </span>{" "}
                <span className="font-bold">
                  Please pay for : {order.productName}
                </span>
              </h2>
              <p>Order quantity : {order.orderQuantity}</p>
              <p>Total cost : ${order.totalCost}</p>
            </div>
          </div>
        </div>

        <div class=" pt-10 bg-gray-100">
          <div className="text-center mb-4 ">
            <p className="text-xl font-semibold uppercase">
              Payment your money using bkash
            </p>
            <p className="text-sm text-red-300 mt-1">
              bKash Number: 01625-511680
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
            <div>
              <img src={bkash} alt="" />
            </div>
            <div>
              <div className="bg-base-100 p-6">
                <form action="" onSubmit={handlePayment}>
                  <div className="grid grid-cols-1 gap-1">
                    <div class="form-control w-full">
                      <label class="label">
                        <span class="label-text">Your Name</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value={user?.displayName}
                        class="input input-bordered w-full input-sm "
                      />
                    </div>
                    <div class="form-control w-full">
                      <label class="label">
                        <span class="label-text">Your Email</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value={user?.email}
                        class="input input-bordered w-full input-sm "
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-x-5">
                      <div class="form-control w-full  max-w-xs">
                        <label class="label">
                          <span class="label-text">Your bKash Number</span>
                        </label>
                        <input
                          type="text"
                          name="number"
                          placeholder="Your bKash Number"
                          class="input input-bordered w-full input-sm max-w-xs"
                        />
                      </div>
                      <div class="form-control w-full  max-w-xs">
                        <label class="label">
                          <span class="label-text">Transaction ID </span>
                        </label>
                        <input
                          type="text"
                          name="transId"
                          placeholder="Trans Id"
                          class="input input-bordered w-full input-sm max-w-xs"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn  btn-sm w-full">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
