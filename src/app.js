require("dotenv").config();

const express = require("express");
const path = require("path");
const { auth } = require("express-openid-connect");
const { messagesRouter } = require("./messages/messages.router");
const { pagesRouter } = require("./pages/pages.router");

const app = express();
const port = process.env.PORT;
const {
  issuerBaseUrl,
  baseUrl,
  clientId,
  clientSecret,
  sessionSecret,
  audience,
} = require("./config");

app.set("views", path.join(__dirname, "pages", "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  auth({
    issuerBaseURL: issuerBaseUrl,
    baseURL: baseUrl,
    clientID: clientId,
    clientSecret: clientSecret,
    secret: sessionSecret,
    authRequired: false,
    auth0Logout: true,
    authorizationParams: {
      response_type: "code",
      audience: audience,
    },
  })
);

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  next();
});

app.use("/", pagesRouter);
app.use("/api/messages/", messagesRouter);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
