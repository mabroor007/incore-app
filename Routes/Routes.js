const mainRouter = require("express").Router();

mainRouter.get("/", (req, res) => {
  res.send("Hello inerco🔥");
});

module.exports = mainRouter;
