import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const OrderDetails = ({ order, index }) => {
  // const { id } = useParams();

  // const [payment, setPayment] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/payment/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPayment(data));
  // }, []);

  const [deletingOrder, setDeletingOrder] = useState(false);
  const {
    _id,
    orderId,
    productName,
    img,
    main_price,
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
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Delete successfull.");
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
              <div class="text-sm opacity-50">Price: {price} tk</div>
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
        <td>{totalCost} tk</td>
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
        </td>
      </tr>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default OrderDetails;
