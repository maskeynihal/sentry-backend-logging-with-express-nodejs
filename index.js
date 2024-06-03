const express = require("express");

const app = express();
const port = 8848;

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

app.post("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
