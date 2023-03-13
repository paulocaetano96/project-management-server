
const express = require('express');
const app = express();

// Import your routes from app.js
const routes = require("./app");

// Add CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://team-comms.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Define your routes
app.use('/', routes);

// Set the PORT for the app to listen on
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
