import "../styles/login.css";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isActive = email.trim() !== "" && password.trim() !== "";

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
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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