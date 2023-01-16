// Require Core Modules
const path = require("path");

//Require NPM Modules
const express = require("express");

// Initlaize App
const app = express();

// Set View Engine
app.set("view engine", "hbs");

//Servce public folder (index)
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

// Create routes

app.get("/", (req, res) => {
  res.render("index", {
     title: "Weather",
     name: "Kohhx",
  });
});

app.get("/about", (req, res) => {
  res.render('about', {
    title: "About me",
    name: "Kohhx"
  })
})

app.get("/help", (req, res) => {
  res.render('help', {
    message: "Help....",
  })
})

// app.get("/weather", (req, res) => {
//   res.send({
//     forecast: "It is sunny",
//     location: "Singapore",
//   });
// });

// Listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running on PORT " + PORT + "...");
});
