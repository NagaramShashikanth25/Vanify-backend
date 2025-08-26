// client/src/pages/Auth.js
import React from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const Auth = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("✅ User Info:", result.user);
      alert("Login successful!");
      // You can redirect here if needed
    } catch (error) {
      console.error("❌ Google Login Error:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login or Signup</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Auth;