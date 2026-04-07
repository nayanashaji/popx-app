import "../styles/signup.css";
import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isPhoneValid = /^[0-9]{10}$/.test(form.phone);
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(form.password);

  const isActive =
    form.fullName &&
    isPhoneValid &&
    isEmailValid &&
    isPasswordValid;

  return (
    <div className="container top signup-container">
      <div className="signup-content">

        <h1>Create your PopX account</h1>

        <div className="input-group">
          <label>Full Name*</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Phone number*</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          {!isPhoneValid && form.phone && (
            <span className="error">Enter valid 10-digit number</span>
          )}
        </div>

        <div className="input-group">
          <label>Email address*</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {!isEmailValid && form.email && (
            <span className="error">Enter valid email</span>
          )}
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {!isPasswordValid && form.password && (
            <span className="error">
              8 chars, 1 uppercase, 1 number, 1 special char
            </span>
          )}
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?*</p>

          <label>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

      </div>

      <div className="bottom-btn">
        <button
          className={`signup-primary-btn ${isActive ? "active" : ""}`}
          disabled={!isActive}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;