const express = require("express");

const app = express();

const PORT = "3001";

app.listen(PORT, () => {
  console.log(`server is running at port no http://localhost:${PORT}`);
});

// Get all book
app.get("/books", async (req, res) => {
  try {
    res.status(200).json({ message: "All books are returned." });
  } catch (error) {
    res.json({ message: error.message });
  }
});
