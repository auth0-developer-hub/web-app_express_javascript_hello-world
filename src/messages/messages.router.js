const express = require("express");
const { callApi } = require("../utils/call-api");
const messagesRouter = express.Router();

messagesRouter.get("/:type", async (req, res) => {
  const { type } = req.params;

  let resourceUrl = `${process.env.API_SERVER_URL}/api/messages/${type}`;
  let options;

  const requiresAuthorization = type === "protected" || type === "admin";
  const hasAccessToken = req.oidc && req.oidc.accessToken;

  if (requiresAuthorization && !hasAccessToken) {
    res.status(401).json({ message: "Unauthorized to retrieve message." });
    return;
  }

  if (requiresAuthorization && hasAccessToken) {
    let { token_type, access_token } = req.oidc.accessToken;

    options = {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    };
  }

  const { error, data } = await callApi(resourceUrl, options);

  if (data && data.message) {
    res.status(200).json({ message: data.message });
    return;
  }

  if (error) {
    res.status(error.status).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: "Unable to retrieve message." });
});

module.exports = { messagesRouter };
