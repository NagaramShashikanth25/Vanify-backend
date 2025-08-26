import React, { useState } from "react";
import axios from "axios";

const WorkerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/api/workers/login", { email, password });
      alert("✅ Login successful. Welcome, " + res.data.name);
      // Save worker ID or token in localStorage if needed
    } catch (error) {
      console.error(error);
      alert("❌ Invalid login credentials");
    }
  };

  return (
    <div>
      <h2>Worker Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default WorkerLogin;