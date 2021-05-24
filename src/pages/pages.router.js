const express = require("express");
const { requiresAuth } = require("express-openid-connect");

const pagesRouter = express.Router();

pagesRouter.get("/", (req, res) => {
  res.render("home");
});

pagesRouter.get("/profile", requiresAuth(), (req, res) => {
  const user = req.oidc.user;
  const code = JSON.stringify(user, null, 2);

  res.render("profile", { user, code, activeRoute: req.path });
});

pagesRouter.get("/external-api", requiresAuth(), (req, res) => {
  res.render("external-api", { activeRoute: req.path });
});

pagesRouter.get("/sign-up", (req, res) => {
  res.oidc.login({
    authorizationParams: {
      screen_hint: "signup",
    },
  });
});

module.exports = {
  pagesRouter,
};
