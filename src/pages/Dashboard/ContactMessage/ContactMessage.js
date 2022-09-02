import React, { useEffect, useState } from "react";
import ContactMessageContainer from "./ContactMessageContainer";

const ContactMessage = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch(`https://stark-shelf-45913.herokuapp.com/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);
  return (
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All Contact Message
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="bg-base-100 p-2 md:px-20 rounded-lg">
        <div class="overflow-x-auto">
          <table class="table-compact table-zebra w-full ">
            <thead>
              <tr className="bg-primary">
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <ContactMessageContainer
                  key={contact._id}
                  contact={contact}
                  index={index}
                ></ContactMessageContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
