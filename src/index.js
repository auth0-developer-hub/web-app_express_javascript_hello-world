const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "4040";

app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const logo =
    "https://images.ctfassets.net/23aumh6u8s0i/5ag0GOEY8gO8K28Cu2x6kK/f924bd4dada2dc8f775eda7f7dec9910/pug.svg";

  res.render("home", { logo });
});

app.get("/profile", (req, res) => {
  const user = {
    nickname: "Alex",
    name: "Alex Cero",
    picture:
      "https://images.ctfassets.net/23aumh6u8s0i/XWKpjS2uxXPDPGMl99FoV/d82a062cd4514a985fb47f8d4b5d3660/auth0-user.png",
    updated_at: "2021-05-04T21:33:09.415Z",
    email: "alex@example.com",
    email_verified: false,
    sub: "auth0|12345678901234567890",
  };

  const code = JSON.stringify(user, null, 2);

  res.render("profile", { user, code, activeRoute: req.path });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.get("/external-api", (req, res) => {
  res.render("external-api", { activeRoute: req.path });
});
