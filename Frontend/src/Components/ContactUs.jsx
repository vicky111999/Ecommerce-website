import React, { useState } from "react";
import "../styles/contactus.css";
import { Calllog, Maillog } from "./Svgcom";
import Button from "../Components/Button.jsx";
import { toast } from "react-toastify";

const ContactUs = ({ calllog, maillog }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({});
  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    let newerror = {};
    if (!formdata?.name) newerror.name = "Name is required";
    if (!formdata?.email) newerror.email = "Email is required";
    if (!formdata?.phone) newerror.phone = "Phonenumber is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formdata?.email && !emailRegex.test(formdata?.email)) {
      newerror.email = "Invalid Email format";
    }
    if (formdata?.phone && formdata?.phone.length !== 10) {
      newerror.phone = "Phone Number must 10 digit";
    }
    if (Object.keys(newerror).length > 0) {
      setError(newerror);
      return;
    }
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      console.log(response);
      if (!response.ok && response.status == 400)
        toast.error(`HTTP SERVER:${response.status}`);
      else if (response.ok && response.status == 200)
        toast.success("We will contact soon");
      else if (!response.ok && response.status) toast.error("Unexpected Error");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="contact-main">
          <div className="contact-log">
            <div className="contact-logsub">
              <div className="contact-sub">
                <p>
                  <Calllog />
                  <span className="call-title">{calllog.title}</span>
                </p>
                <p>{calllog.address}</p>
                <p>Phone: {calllog.number}</p>
              </div>
              <div className="contact-sub">
                <p>
                  <Maillog />
                  <span className="mail-title">{maillog.title}</span>
                </p>
                <p>{maillog.content}</p>
                <p>{maillog.email1}</p>
                <p>{maillog.email2}</p>
              </div>
            </div>
          </div>
          <div className="contact-inputsmain">
            <div className="contact-inputs">
              <div className="contact-inputlog">
                <div>
                  <div className="input-container">
                    <input
                      style={{ border: error?.name ? "1px solid red" : "none" }}
                      type="text"
                      value={formdata?.name}
                      name="name"
                      placeholder="Your Name"
                      onChange={handlechange}
                    ></input>
                    <span className="required-star">*</span>
                  </div>
                  <p
                    className="m-0 error-handling"
                    style={{ visibility: error?.name ? "visible" : "hidden" }}
                  >
                    {(error && error.name) || "placeholder"}
                  </p>
                </div>
                <div>
                  <div className="input-container">
                    <input
                      style={{
                        border: error?.email ? "1px solid red" : "none",
                      }}
                      type="text"
                      value={formdata?.email}
                      name="email"
                      placeholder="Your Email"
                      onChange={handlechange}
                    ></input>
                    <span className="required-star">*</span>
                  </div>
                  <p
                    className="m-0 error-handling"
                    style={{ visibility: error?.email ? "visible" : "hidden" }}
                  >
                    {(error && error.email) || "placeholder"}
                  </p>
                </div>
                <div>
                  <div className="input-container">
                    <input
                      style={{
                        border: error?.phone ? "1px solid red" : "none",
                      }}
                      type="number"
                      value={formdata?.phone}
                      name="phone"
                      placeholder="Your Phone"
                      onChange={handlechange}
                    ></input>
                    <span className="required-star">*</span>
                  </div>
                  <p
                    className="m-0 error-handling"
                    style={{ visibility: error?.phone ? "visible" : "hidden" }}
                  >
                    {(error && error.phone) || "placeholder"}
                  </p>
                </div>
              </div>
              <div className="textara-align">
                <textarea
                  value={formdata?.message}
                  name="message"
                  placeholder="Your Message"
                  onChange={handlechange}
                ></textarea>
              </div>
              <div className="button-alignment">
                <Button
                  type="submit"
                  item={"Send Massage"}
                  classname={"viewbtn-contact"}
                  classname1={"alignbtnview"}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
