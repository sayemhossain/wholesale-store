import React from "react";

const SubcriberListContainer = ({ subcribe, index }) => {
  const { email } = subcribe;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
    </tr>
  );
};

export default SubcriberListContainer;
