import React from "react";
import { useState,useEffect } from "react";
import '../List/style.css';

const initialValue = { fullname: "", phone_number: "" };
const Form = ({contacts,setContacts}) => {
  
  useEffect(() => {
    setForm(initialValue);
  }, [contacts])
  
  
  const [form, setForm] = useState(initialValue);

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    setContacts([...contacts,form])
    
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="all_input"
            name="fullname"
            value={form.fullname}
            placeholder="Fullname"
            onChange={onChangeForm}
          />
        </div>
        <div>
          <input
            className="all_input"
            name="phone_number"
            value={form.phone_number}
            placeholder="Phone Number"
            onChange={onChangeForm}
          />
        </div>
        <div className="btn_div">
          <button className="btn" type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
