import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const WorkerDashboard = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    } else {
      alert("Unauthorized access. Please log in.");
      navigate("/worker-auth");
    }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>👷 Worker Dashboard</h2>
      <p>Welcome, {userEmail}</p>
      <p>This is your dashboard where future features like job listings, availability, and profile settings will appear.</p>
    </div>
  );
};

export default WorkerDashboard;