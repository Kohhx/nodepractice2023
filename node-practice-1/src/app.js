// Require Core Modules
const path = require("path");

//Require NPM Modules
const express = require("express");

// Initlaize App
const app = express();

//Servce public folder (index)
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

// Create routes

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
