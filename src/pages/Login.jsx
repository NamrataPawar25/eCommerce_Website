// Login.tsx
import React, { useEffect, useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Authprovider';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loggedUser, login } = useContext(AuthContext)

  function handleLogin(e) {
    e.preventDefault();
    try {
      const mgs = login(email, password)
      if (mgs) {
        alert(mgs)
        navigate("/dashboard")
      }
      else {
        alert("Invalid Credientials")
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(loggedUser, "in login page");
  return (
    <div className="registration-wrapper d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="form-text">We'll never share your email.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
          <Link to="/register">If Not Registered</Link>
        </form>
      </div>
    </div>
  );
};
