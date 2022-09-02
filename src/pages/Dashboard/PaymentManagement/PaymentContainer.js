import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaymentContainer = ({ payment, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{payment.productName}</td>
      <td>{payment.bkashNumber}</td>
      <td>{payment.transId}</td>
      <td>{payment.orderQuantity}</td>
      <td>{payment.totalCost} tk</td>
      <td>
        <FontAwesomeIcon
          className="text-green-400"
          icon={faCircleCheck}
        ></FontAwesomeIcon>
      </td>
    </tr>
  );
};

export default PaymentContainer;
