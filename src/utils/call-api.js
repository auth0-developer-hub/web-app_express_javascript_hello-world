const got = require("got");

const callApi = async (url, options = {}) => {
  try {
    const responseBody = await got(url, options).json();

    return { error: null, data: responseBody };
  } catch (e) {
    const status = e.response.statusCode;
    const errorBody = JSON.parse(e.response.body);
    const message = errorBody.message;

    return {
      error: {
        status,
        message,
      },
      data: null,
    };
  }
};

module.exports = { callApi };
