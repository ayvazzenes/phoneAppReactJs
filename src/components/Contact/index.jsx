import React from "react";
import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Enes",
      phone_number: "123123",
    },
    {
      fullname: "Tuğba",
      phone_number: "345345",
    },
    {
      fullname: "Asaf Efe",
      phone_number: "567567",
    },
  ]);
  useEffect(() => {
    showData(contacts);
  }, [contacts]);
  const showData = (contacts) => {
    console.log(contacts);
  };

  return (
    <div className="contacts">
      <h1>Directory</h1>
      <div className="contacts_items">
      
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
      </div>
    </div>
  );
};

export default Contact;
