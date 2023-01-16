const express = require("express");

const app = express();

// Create routes
app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "KOHHX",
      age: 100,
    },
    {
      name: "KY",
      age: 200,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>"); // Send a HTML string
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "Singapore",
  });
});

// Listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running on PORT " + PORT + "...");
});
