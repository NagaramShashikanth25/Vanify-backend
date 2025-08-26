import React, { useState } from "react";

const WorkerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    skill: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5050/api/workers/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        alert("✅ Worker signed up! ID: " + data.id);
        setFormData({ name: "", skill: "", phone: "" });
      } else {
        alert("❌ Failed to sign up worker.");
      }
    } catch (error) {
      console.error("Worker signup error:", error);
      alert("❌ Server error. Check console.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Worker Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="skill"
          placeholder="Skill (e.g., Plumber, Electrician)"
          value={formData.skill}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default WorkerSignup;