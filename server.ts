import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/test", (req, res) => {
  res.send("Hello, test!");
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
})
