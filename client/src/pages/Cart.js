// client/src/pages/Cart.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const service = localStorage.getItem("selectedService");
  const date = localStorage.getItem("selectedDate");

  const handleProceed = () => {
    navigate("/review-booking");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Booking Cart</h2>
      {service && date ? (
        <div>
          <p><strong>Selected Service:</strong> {service}</p>
          <p><strong>Selected Date:</strong> {date}</p>
          <button onClick={handleProceed}>Proceed to Review</button>
        </div>
      ) : (
        <p>Your cart is empty. Please select a service and date first.</p>
      )}
    </div>
  );
};

export default Cart;