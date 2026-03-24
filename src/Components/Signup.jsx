import React, { useState } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Googleicon } from "./Svgcom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const api = import.meta.env.VITE_API_URL

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
    setError("");
    let newerror = {};
    setLoading(true);
    if (!formdata?.name) newerror.name = "Name is required";
    if (!formdata?.email) newerror.email = "Email or phone Number required";
    if (!formdata?.password) newerror.password = "Password is required";
    const passwordRegexLowercase = /^(?=.*[a-z])[A-Za-z\d!@#$%^&*]+$/;
    const passwordRegexUppercase = /^(?=.*[A-Z])[A-Za-z\d!@#$%^&*]+$/;
    const passwordRegexdigit = /^(?=.*\d)[A-za-z\d!@#$%^&*]+$/;
    const passwordRegexSymbol = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formdata?.email && !isNaN(formdata?.email)) {
      if (formdata?.email.length !== 10) {
        newerror.email = "10 digit phone Number needed";
      }
    } else {
      if (formdata?.email && !emailRegex.test(formdata?.email))
        newerror.email = "Invalid Email format";
    }
    if (formdata?.password) { 
    if (!passwordRegexUppercase.test(formdata?.password)) {
        newerror.password = "Must includes uppercase";
      } else if (!passwordRegexLowercase.test(formdata?.password)) {
        newerror.password = "Must includes lowercase";
      } else if (!passwordRegexdigit.test(formdata?.password)) {
        newerror.password = "Must includes number";
      } else if(!passwordRegexSymbol.test(formdata?.password)){
        newerror .password = "Must includes symbol"
      } else if (formdata?.password.length < 8) {
        newerror.password = "Atleast 8 characters";
      }
    }
    if (Object.keys(newerror).length > 0) {
      setError(newerror);
      setLoading(false);
      return;
    }
    console.log("hi")
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(formdata)
      });
        console.log(response)
      if (!response.ok && response.status == 400)
        toast.error(`HTTP SERVER : ${response.status}`);
      if (response.ok && response.status === 200)
        toast.success("Successfully Signedup");
      if (!response.ok && response.status) toast.error("Unexpected Error");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="headingalign">
          <h1 className="headingtag">Create an account</h1>
          <h6>Enter your details below</h6>
        </div>
        <div className="signup-inputs">
          <input
            type="text"
            value={formdata?.name}
            onChange={handlechange}
            name="name"
            placeholder="Name"
          />
          <p
            style={{
              visibility: error?.name ? "visible" : "hidden",
              color: "red",
            }}
          >
            {error?.name || "placeholder"}
          </p>
          <input
            type="text"
            value={formdata?.email}
            onChange={handlechange}
            name="email"
            placeholder="Email or Phone Number"
          />
          <p
            style={{
              visibility: error?.email ? "visible" : "hidden",
              color: "red",
            }}
          >
            {error?.email || "placeholder"}
          </p>
          <input
            type="password"
            value={formdata?.password}
            onChange={handlechange}
            name="password"
            placeholder="password"
          />
          <p
            style={{
              visibility: error?.password ? "visible" : "hidden",
              color: "red",
            }}
          >
            {error?.password || "placeholder"}
          </p>
          <button type="submit" className="buttonorder">
            <div
              className={loading ? "spinner-border text-primary" : "none"}
              role="status"
            >
              Create Account
            </div>
          </button>
          <button className="googleicon" type="button">
            <Googleicon /> Sign up with Google
          </button>
        </div>
        <div className="linkto">
          <span> Already have account? </span>
          <Link to="/login">Log in</Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
