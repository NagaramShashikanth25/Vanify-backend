import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectDate = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date.");
      return;
    }
    localStorage.setItem("selectedDate", date);
    navigate("/review-booking");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Select a Date</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <button type="submit" style={{ marginTop: "1rem" }}>Next</button>
      </form>
    </div>
  );
};

export default SelectDate;