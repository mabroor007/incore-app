const mainRouter = require("express").Router();

mainRouter.get("/", (req, res) => {
  res.render("main.ejs");
});

module.exports = mainRouter;
