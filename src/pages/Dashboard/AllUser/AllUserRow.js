import React from "react";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

const AllUserRow = ({ user, index }) => {
  const { email, role, subRole } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "contant-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => alert("Make admin done"));
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        {role ? (
          <p>Already an admin</p>
        ) : (
          <button
            onClick={makeAdmin}
            className="bg-accent px-2 py-0.5 rounded-sm text-xs text-white flex items-center font-semibold"
          >
            <FontAwesomeIcon
              className="mr-2 rounded-full text-black"
              icon={faShield}
            ></FontAwesomeIcon>{" "}
            Make Admin
          </button>
        )}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default AllUserRow;
