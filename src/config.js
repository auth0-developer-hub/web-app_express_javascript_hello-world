require("dotenv").config();

const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const audience = process.env.AUTH0_AUDIENCE;
const baseUrl = process.env.BASE_URL;
const sessionSecret = process.env.SESSION_SECRET;
const apiServerUrl = process.env.API_SERVER_URL;

if (!issuerBaseUrl) {
  throw new Error(
    ".env is missing the definition of an AUTH0_ISSUER_BASE_URL environmental variable"
  );
}

if (!clientId) {
  throw new Error(
    ".env is missing the definition of an AUTH0_CLIENT_ID environmental variable"
  );
}

if (!clientSecret) {
  throw new Error(
    ".env is missing the definition of an AUTH0_CLIENT_SECRET environmental variable"
  );
}

if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable"
  );
}

if (!baseUrl) {
  throw new Error(
    ".env is missing the definition of a BASE_URL environmental variable"
  );
}

if (!sessionSecret) {
  throw new Error(
    ".env is missing the definition of a SESSION_SECRET environmental variable"
  );
}

if (!apiServerUrl) {
  throw new Error(
    ".env is missing the definition of an API_SERVER_URL environmental variable"
  );
}

module.exports = {
  issuerBaseUrl,
  clientId,
  clientSecret,
  audience,
  baseUrl,
  sessionSecret,
  apiServerUrl,
};
