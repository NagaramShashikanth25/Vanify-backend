const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();

router.post("/register", async (req, res) => {
  const { name, email, phone, skills, city, password } = req.body;
  try {
    const workerRef = await db.collection("workers").add({
      name,
      email,
      phone,
      skills,
      city,
      password,
      approved: false
    });
    res.status(200).send({ id: workerRef.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const snapshot = await db
      .collection("workers")
      .where("email", "==", email)
      .where("password", "==", password)
      .get();

    if (snapshot.empty) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    const worker = snapshot.docs[0].data();
    res.status(200).send({ message: "Login successful", name: worker.name });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// GET bookings assigned to a specific worker
router.get("/:workerId/bookings", async (req, res) => {
  const { workerId } = req.params;
  try {
    const snapshot = await db
      .collection("bookings")
      .where("assignedTo", "==", workerId)
      .get();

    const bookings = snapshot.docs.map((doc) => doc.data());
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;