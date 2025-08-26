const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Vanify backend is running ✅");
});

// Port
const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));