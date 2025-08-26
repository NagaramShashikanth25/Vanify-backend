import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ⬅️ Import navigation hook

const Booking = () => {
  const [formData, setFormData] = useState({
    userId: "",
    service: "",
    date: ""
  });

  const navigate = useNavigate(); // ⬅️ Initialize navigate

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/api/bookings/book", formData);
      console.log("✅ Booking response:", res.data);
      navigate("/thankyou"); // ⬅️ Redirect after successful booking
    } catch (error) {
      console.error("❌ Booking failed:", error);
      alert("Booking failed:" + error.message);
    }
  };

  return (
    <div>
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="service"
          placeholder="Service"
          value={formData.service}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;