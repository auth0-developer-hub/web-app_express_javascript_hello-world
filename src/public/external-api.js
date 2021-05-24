const callApi = async (url) => {
  const response = await fetch(url);
  const responseBody = await response.json();

  if (response.ok) {
    return { error: null, data: responseBody };
  }

  return {
    error: {
      status: response.status,
      message: responseBody.message,
    },
    data: null,
  };
};

const getMessage = async (type) => {
  /**
   * To call the /api/messages/admin endpoint, you need to log in
   * as a user that has the messages-admin role, which in turn
   * has the read:admin-messages permission.
   * If you need help doing so, check out the following resources.
   * Create roles:
   * https://auth0.com/docs/authorization/rbac/roles/create-roles
   * Create permissions:
   * https://auth0.com/docs/get-started/dashboard/add-api-permissions
   * Add permissions to roles:
   * https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles
   * Assign roles to users:
   * https://auth0.com/docs/users/assign-roles-to-users
   */

  const resourceUrl = `/api/messages/${type}`;

  try {
    const { error, data } = await callApi(resourceUrl);

    if (data) {
      return data.message;
    }

    if (error) {
      return `Error ${error.status}: ${error.message}`;
    }

    return "Unable to retrieve messages.";
  } catch (error) {
    return error.message || error;
  }
};

const publicButton = document.getElementById("public");
const protectedButton = document.getElementById("protected");
const adminButton = document.getElementById("admin");
const messageBox = document.getElementById("message");

publicButton.addEventListener("click", async () => {
  const message = await getMessage("public");

  protectedButton.classList.remove("messages-grid__option--active");
  adminButton.classList.remove("messages-grid__option--active");

  publicButton.classList.add("messages-grid__option--active");
  messageBox.innerText = message;
});

protectedButton.addEventListener("click", async () => {
  const message = await getMessage("protected");

  publicButton.classList.remove("messages-grid__option--active");
  adminButton.classList.remove("messages-grid__option--active");

  protectedButton.classList.add("messages-grid__option--active");
  messageBox.innerText = message;
});

adminButton.addEventListener("click", async () => {
  const message = await getMessage("admin");

  publicButton.classList.remove("messages-grid__option--active");
  protectedButton.classList.remove("messages-grid__option--active");

  adminButton.classList.add("messages-grid__option--active");
  messageBox.innerText = message;
});

(async function () {
  messageBox.innerText = await getMessage("public");
  publicButton.classList.add("messages-grid__option--active");
})();
