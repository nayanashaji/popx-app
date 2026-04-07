import "../styles/login.css";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  const isActive = isEmailValid && isPasswordValid;

  return (
    <div className="container top">
      <div className="login-content">

        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && email && (
            <span className="error">Enter a valid email</span>
          )}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && password && (
            <span className="error">
              Min 8 chars, 1 uppercase, 1 number, 1 special char
            </span>
          )}
        </div>

        <button
          className={`login-btn ${isActive ? "active" : ""}`}
          disabled={!isActive}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;