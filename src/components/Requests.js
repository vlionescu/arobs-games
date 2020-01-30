// Fetch.js
const _apiHost = "http://localhost:8080";

async function request(url, params, method = "GET") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(_apiHost + url, options);

  if (response.status !== 200) {
    const result = await response.json();

    return generateErrorResponse(
        response.ok,
      response.status,
        result.error
    );
  }

  const result = await response.json();

  return result;
}

function objectToQueryString(obj) {
  return Object.keys(obj)
    .map(key => key + "=" + obj[key])
    .join("&");
}

function generateErrorResponse(ok,status, message) {
  return {
    ok:ok,
    status: status,
    error: message
  };
}

function get(url, params) {
  return request(url, params);
}

function create(url, params) {
  return request(url, params, "POST");
}

function update(url, params) {
  return request(url, params, "PUT");
}

function remove(url, params) {
  return request(url, params, "DELETE");
}

export default {
  get,
  create,
  update,
  remove
};
