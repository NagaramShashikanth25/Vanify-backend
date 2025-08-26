import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
      fetchBookings(currentUser.uid);
    } else {
      alert("Please log in first");
      navigate("/auth");
    }
  }, []);

  const fetchBookings = async (uid) => {
    try {
      const res = await axios.get(`http://localhost:5050/api/bookings/user/${uid}`);
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching user bookings:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👤 User Dashboard</h2>
      <p>Welcome, {userEmail}</p>

      <h3>Your Bookings:</h3>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserDashboard;