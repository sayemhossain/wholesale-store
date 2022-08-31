import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import PaymentContainer from "./PaymentContainer";

const PaymentManagement = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const [payments, setPayments] = useState([]);
  useEffect(() => {
    fetch(`https://stark-shelf-45913.herokuapp.com/payments/${email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);
  console.log(payments);
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
      <div className="md:px-28">
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Product Name</th>
                <th>bKash Number</th>
                <th>trans Id</th>
                <th>Order Quantity</th>
                <th>Total Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, index) => (
                <PaymentContainer
                  payment={payment}
                  index={index}
                  key={payment._id}
                ></PaymentContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;
