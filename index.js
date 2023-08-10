const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/users", (req, res) => {
  res.send("Users page");
});

app.put("/users", (req, res) => {
  res.send("Users updated");
});

app.delete("/users", (req, res) => {
  res.send("Users page deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
