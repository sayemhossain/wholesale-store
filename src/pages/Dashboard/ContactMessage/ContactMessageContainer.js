import React from "react";

const ContactMessageContainer = ({ contact, index }) => {
  const { name, email, phone, subject, text } = contact;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{subject}</td>
      <td>{text}</td>
    </tr>
  );
};

export default ContactMessageContainer;
