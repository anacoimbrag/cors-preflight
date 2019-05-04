const express = require("express");
const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Cors Test");
});

app.options("/", (req, res) => {
  res.send(true);
});

app.post("/", (req, res) => {
  res.send("POSTED on root");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
