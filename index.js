const express = require("express");
const Router = require("./Routes/Routes");

// app
const app = express();

// View Engine
app.set("view engine", "ejs");

// static files
app.use(express.static("public"));

// routes
app.use("/", Router);

// app start
app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
