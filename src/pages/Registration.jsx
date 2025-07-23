import React, { useState } from 'react';
import './Style.css'; // custom styles

export const Registration = ({setIsRegister}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleRegister(event) {
    event.preventDefault();
    if (validate()) {
      const payload = { 
        name: userName, 
        email: email, 
        password: password 
      };
      console.log(payload, "payload");
      localStorage.setItem("user", JSON.stringify(payload));
      alert("Form submitted successfully!");
      setUserName(""); setEmail(""); setPassword("");
      setIsRegister(true)
    }
  }

  return (
    <div className="registration-wrapper d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 text-primary">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && <small className="text-danger">{errors.userName}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-text">We'll never share your email.</div>
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="checkMe" />
            <label className="form-check-label" htmlFor="checkMe">I agree to the terms</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};
