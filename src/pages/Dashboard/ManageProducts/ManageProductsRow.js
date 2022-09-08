import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

const ManageProductsRow = ({ product, index }) => {
  const {
    _id,
    name,
    description,
    available_quantity,
    minimum_order_quantity,
    price,
    img,
  } = product;
  const handleDeleteTool = () => {
    fetch(`https://stark-shelf-45913.herokuapp.com/products/${_id}`, {
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
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td className="text-justify">{description}</td>
        <td>{available_quantity}</td>
        <td>{minimum_order_quantity}</td>
        <td>{price}tk</td>
        <td>
          <p
            onClick={handleDeleteTool}
            className="flex bg-error p-1 rounded-full text-white"
          >
            <p>
              <FontAwesomeIcon className=" mr-1" icon={faTrashCan} />
            </p>
            Delete
          </p>
        </td>
      </tr>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default ManageProductsRow;
