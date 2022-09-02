import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const OrderDetails = ({ order, index }) => {
  // const { id } = useParams();

  // const [payment, setPayment] = useState({});
  // useEffect(() => {
  //   fetch(`https://stark-shelf-45913.herokuapp.com/payment/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPayment(data));
  // }, []);

  const [deletingOrder, setDeletingOrder] = useState(false);
  const {
    _id,
    orderId,
    productName,
    img,
    price,
    customerNamer,
    address,
    phone,
    totalCost,
    paid,
    orderQuantity,
    transactionId,
  } = order;

  const handleDeleteOrder = () => {
    fetch(`https://stark-shelf-45913.herokuapp.com/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete successfull.");
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div class="flex items-center gap-3 space-x-1">
            <div class="avatar">
              <div class="w-14 h-14">
                <img src={img} alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold text-sm">
                <small>{productName}</small>
              </div>
              <div class="text-sm opacity-50">Price: ${price}</div>
            </div>
          </div>
        </td>
        <td>
          {customerNamer}
          <br />
          <span class="badge badge-ghost badge-sm">Address : {address}</span>
          <br></br>
          <span class="badge badge-ghost badge-sm">phone : {phone}</span>
        </td>
        <td>Quantity : {orderQuantity}</td>
        <td>${totalCost}</td>
        <td>
          {price && !paid && (
            <button
              onClick={handleDeleteOrder}
              className="btn btn-xs btn-error px-5"
            >
              Cancel
            </button>
          )}
          {price && paid && (
            <button className="btn btn-outline btn-xs btn-error px-5" disabled>
              Cancel
            </button>
          )}
        </td>
        <td>
          {price && !paid && (
            <Link to={`/dashboard/paymentwraper/${_id}`}>
              <div className="flex justify-center">
                <button className="btn btn-primary px-8 btn-xs">pay</button>
              </div>
            </Link>
          )}
          {price && paid && (
            <span className=" px-8">
              <div className=" flex items-center justify-center ">
                <FontAwesomeIcon
                  className="text-green-400 mr-1"
                  icon={faCircleCheck}
                />
                <span className="text-xl">paid</span>
              </div>
              <p className="text-sm text-center">
                <small>
                  Transaction Id: <br></br>
                  <span className="text-red-600">{transactionId}</span>
                </small>
              </p>
            </span>
          )}
        </td>
      </tr>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default OrderDetails;
