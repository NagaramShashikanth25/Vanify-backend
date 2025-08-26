import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

const WorkerAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authInstance = getAuth();

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
        const worker = userCredential.user;
        // Save to Firestore (in 'workers' collection)
        await setDoc(doc(db, "workers", worker.uid), {
          email,
          role: "worker",
          createdAt: new Date()
        });
        alert("Signup successful");
      } else {
        await signInWithEmailAndPassword(authInstance, email, password);
        alert("Login successful");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{isSignup ? "Worker Signup" : "Worker Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">{isSignup ? "Signup" : "Login"}</button>
      </form>
      <p onClick={toggleMode} style={{ cursor: "pointer", marginTop: "1rem" }}>
        {isSignup ? "Already a worker? Login" : "New worker? Signup"}
      </p>
    </div>
  );
};

export default WorkerAuth;