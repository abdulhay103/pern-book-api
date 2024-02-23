const express = require("express");
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");

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
    const { title, description } = req.body;
    const id = uuidv4();

    //Inser Data in database
    const newBook = await pool.query(
      "INSERT INTO books (id, title, description) VALUES ($1,$2, $3) RETURNING *",
      [id, title, description]
    );
    res.status(201).json({
      message: `Successfully create a book.`,
      data: newBook.rows,
    });
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

// Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const { title, desc } = req.body;
    res
      .status(201)
      .json({ message: `Successfully update the book ${(title, desc)}` });
  } catch (error) {
    res.json({ message: error.message });
  }
});
