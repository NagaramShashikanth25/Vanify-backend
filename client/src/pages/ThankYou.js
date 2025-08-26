import React from "react";
import { useLocation, Link } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const { service, date, bookingId } = location.state || {};

  return (
    <div style={{ padding: "2rem" }}>
      <h2>✅ Thank You for Your Booking!</h2>
      {service && date && bookingId ? (
        <div>
          <p><strong>Service:</strong> {service}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Booking ID:</strong> {bookingId}</p>
        </div>
      ) : (
        <p>We couldn't retrieve your booking details.</p>
      )}
      <Link to="/"><button style={{ marginTop: "1rem" }}>Back to Home</button></Link>
    </div>
  );
};

export default ThankYou;