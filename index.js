const express = require("express");

const app = express();
const PORT = "3001";

// Apply middleware
app.use(express.json()); // This middleware for use request body
app.use(express.urlencoded({ extended: true })); // This middleware for use formdata

// Run the server
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

// Get a specific book
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Return specific book with id:${id}` });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Create a book
app.post("/books", async (req, res) => {
  try {
    const { title, desc } = req.body;
    res.status(201).json({ message: `Successfully create the book ${title}` });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Delete a specific book
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Delete specific book with id:${id}` });
  } catch (error) {
    res.json({ message: error.message });
  }
});
