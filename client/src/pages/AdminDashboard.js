import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5050/api/bookings");
      setBookings(res.data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
      setError("⚠️ Failed to load bookings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📋 Admin Dashboard</h2>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>User ID</th>
              <th style={styles.th}>Service</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td style={styles.td}>{booking.userId}</td>
                <td style={styles.td}>{booking.service}</td>
                <td style={styles.td}>{booking.date}</td>
                <td style={styles.td}>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem"
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2"
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px"
  }
};

export default AdminDashboard;