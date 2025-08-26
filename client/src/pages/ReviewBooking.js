// ✅ Add at the top
import React from "react";
import axios from "axios"; // ✅ Import axios
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ReviewBooking = () => {
  const navigate = useNavigate(); // ✅ Define navigate
  const service = localStorage.getItem("selectedService");
  const date = localStorage.getItem("selectedDate");

  const handleConfirm = async () => {
    const bookingData = {
      service,
      date,
      userId: "user1234",
      status: "pending"
    };

    try {
      const res = await axios.post("http://localhost:5050/api/bookings/book", bookingData);
      const bookingId = res.data.id;
      navigate("/thankyou", {
        state: {
          service,
          date,
          bookingId
        }
      });
    } catch (error) {
      console.error("❌ Booking failed:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Review Your Booking</h2>
      <p><strong>Service:</strong> {service}</p>
      <p><strong>Date:</strong> {date}</p>
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
};

export default ReviewBooking;