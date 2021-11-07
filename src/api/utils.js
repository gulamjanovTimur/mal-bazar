import { showNotification } from "src/utils"

const api = ' https://a584-95-87-87-71.ngrok.io/api/'


const errorHandler = () => {
  showNotification('negative', 'Внутренняя ошибка сервера')
}

const responseHandler = async res => {
  const response = await res.json()
  return response
}

export const genQuery = params => {
  console.log("Params", params)
  return (
    "?" +
    Object.keys(params)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&")
  );
};

export const headers = {
  "content-type": "application/json",
  "ref-id": "ref-id",
  "device-type": "web",
  "user-agent-c": "chrome",
  // "session-key": sessionKey,
  "connection": "keep-alive"

}

export const http = {
  get(path, body) {
    return fetch(api + path, {
      method: "GET",
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(responseHandler)
      .catch(errorHandler)
  },
  post(path, body) {
    return fetch(api + path, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(responseHandler)
      .catch(errorHandler)
  },
  // put(path, body) {
  //   return fetch(api + path, {
  //     method: "PUT",
  //     headers: headers(getSessionKey()),
  //     body: JSON.stringify(body)
  //   })
  //     .then(responseHandler)
  //     .catch(errorHandler);
  // },
  // delete(path, body) {
  //   return fetch(api + path, {
  //     method: "DELETE",
  //     headers: headers(getSessionKey()),
  //     body: JSON.stringify(body)
  //   })
  //     .then(responseHandler)
  //     .catch(errorHandler);
  // }
};