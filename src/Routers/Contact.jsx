import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Contact.css";

export default function Contact() {

  // usestate
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    Number: "",
    Msg: ""
  });

  // useref (focus)
  const inputRef = useRef(null);

  // page
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // handle change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setdata((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  //submit
  const handleSubmit = useCallback((e) => {
    e.preventDefault();   
    console.log("Submitted Data:", data);

    alert("Form submitted successfully ✅");

    // reset form
    setdata({
      fname: "",
      lname: "",
      email: "",
      Number: "",
      Msg: ""
    });

  }, [data]);

  return (
    <div className="Conmain">

      <div className="Context">
        <h2>Get in Touch</h2>

        <p>
          For general inquiries, training and booking queries, feel free to reach out.
        </p>

        <h3>Cell: 74488 62182</h3>
        <h3>Email: nirmalsiva555@gmail.com</h3>
      </div>

      <div className="Conform">
        <form onSubmit={handleSubmit}>

          <label>First Name</label>
          <input
            ref={inputRef}
            type="text"
            name="fname"
            value={data.fname}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={data.lname}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />

          <label>Number</label>
          <input
            type="text"
            name="Number"
            value={data.Number}
            onChange={handleChange}
            placeholder="Enter Number"
            required
          />

          <label>Message</label>
          <textarea
            name="Msg"
            rows="5"
            value={data.Msg}
            onChange={handleChange}
            placeholder="Enter Message"
            required
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}