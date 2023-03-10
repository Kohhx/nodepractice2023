// Require Core Modules
const path = require("path");

//Require NPM Modules
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Initlaize App
const app = express();

// Set View Engine (Handlebars) ================================================
app.set("view engine", "hbs");
// Serve View Folder ( this has to be set cause we move view folder into
// template folder)
const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);
// Serve partials
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

//Serve static directory - public folder =======================================
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

// Create routes ===============================================================
app.get("/", (req, res) => {
  res.render("index", {
    title: "Main",
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
    title: "Help",
    name: "Kohhx",
    message: "Help....",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    //   if (error){
    //     return
    //   }
    //   forecast(latitude, longitude, (error, forecastData) => {
    //     if (error) {
    //      return res.send({ error })
    //     }
    //     res.send({
    //       forecast: forecastData,
    //       location,
    //       address: req.query.address,
    //     })
    //   })
    // })
  }).then((data) => {
    res.send(data)
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help Page 404",
    name: "Kohhx",
    errorMessage: "Help Page not found!",
  });
});

// Create a 404 page (Must be last) ============================================
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Kohhx",
    errorMessage: "404, Page not found!",
  });
});

// Listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running on PORT " + PORT + "...");
});
