// client/src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Firebase Auth Context
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Vanify</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
          <li><Link to="/worker-auth">Join as Worker</Link></li>
          <li><Link to="/user-dashboard">User Dashboard</Link></li>

          {user ? (
            <>
              <li className="user-info">👤 {user.email}</li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/auth"><button>Login / Signup</button></Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;