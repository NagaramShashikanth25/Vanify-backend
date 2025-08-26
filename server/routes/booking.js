const express = require("express");
const router = express.Router();
const db = require("firebase-admin").firestore();

router.get('/user/:uid', async (req, res) => {
  try {
    const snapshot = await db.collection("bookings").get();
    const bookings = snapshot.docs.map(doc => doc.data());
    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/book", async (req, res) => {
  const { userId, service, date } = req.body;
  try {
    const bookingRef = await db.collection("bookings").add({
      userId,
      service,
      date,
      status: "pending"
    });
    res.status(200).send({ id: bookingRef.id });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;