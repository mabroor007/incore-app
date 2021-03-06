const express = require("express");
const Router = require("./Routes/Routes");

// app
const app = express();

// View Engine
app.set("view engine", "ejs");

// static files
app.use(express.static("Public"));

// routes
app.use("/", Router);

app.use((req, res) => {
  res.send("404 not found");
});
// app start
app.listen(process.env.PORT || 4000, () => {
  console.log("Listening...");
});
