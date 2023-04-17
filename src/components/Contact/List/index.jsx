import React from "react";
import { useState } from "react";
import slugify from "slugify";
import "../List/style.css";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      slugify(item[key].toString(), { replacement: "", lower: true }).includes(
        slugify(filterText, { replacement: "", lower: true, trim: true })
      )
    );
  });
  return (
    <div className="directory">
      <input
        className="all_input"
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="directory_wrapper">
        {filtered.map((contact, i) => (
          <li className="directory_wrapper-item" key={i}>
            <span> {contact.fullname}</span> <span>{contact.phone_number}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
