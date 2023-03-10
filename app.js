// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

//START OF CODE: CREATION OF ROUTES!!!! -----------------------------------------
    //  event routes
    const eventRoutes = require("./routes/event.routes");
    app.use("/api", eventRoutes);

    // notifications routes
    const messagesRoutes = require("./routes/messages.routes");
    app.use("/api", messagesRoutes);

    // documents routes
    const documentsRoutes = require("./routes/document.routes");
    app.use("/api", documentsRoutes);

    // club routes
    const clubRoutes = require("./routes/club.routes");
    app.use("/api", clubRoutes);

    // photos routes
    const photosRoutes = require("./routes/photos.routes");
    app.use("/api", photosRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
