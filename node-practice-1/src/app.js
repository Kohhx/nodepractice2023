const express = require("express");

const app = express();






// Create routes
app.get('/', (req,res) => {
  res.send("Hello express")
})

app.get('/help', (req,res) => {
  res.send("help pages")
})

app.get('/about', (req,res) => {
  res.send("about")
})

app.get('/weather', (req,res) => {
  res.send("weather")
})


// Listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running on PORT " + PORT + "...")
})
