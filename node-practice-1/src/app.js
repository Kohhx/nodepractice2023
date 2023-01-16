// Require Core Modules
const path = require("path");

//Require NPM Modules
const express = require("express");
const  hbs  = require('hbs');

// Initlaize App
const app = express();

// Set View Engine (Handlebars) ================================================
app.set("view engine", "hbs");
// Serve View Folder ( this has to be set cause we move view folder into
// template folder)
const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath)
// Serve partials
const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)



//Serve static directory - public folder =======================================
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));


// Create routes ===============================================================
app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Kohhx",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Kohhx",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "Help....",
  });
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
