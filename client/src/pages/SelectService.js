// src/pages/SelectService.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectService = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }
    localStorage.setItem("selectedService", selectedService);
    navigate("/select-date");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Select a Service</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="">-- Choose a service --</option>
          <option value="cleaning">Cleaning</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="moving">Moving</option>
        </select>
        <br />
        <button type="submit" style={{ marginTop: "1rem" }}>Next</button>
      </form>
    </div>
  );
};

export default SelectService;