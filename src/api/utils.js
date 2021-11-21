import { showNotification } from "src/utils"

const api = 'https://malbazar.herokuapp.com/api/'


const errorHandler = () => {
  showNotification('negative', 'Внутренняя ошибка сервера')
}

const responseHandler = async res => {
  const response = await res.json()
  return response
}

const getSessionKey = () => {
  const sessionKey = localStorage.getItem('sessionKey')
  return sessionKey ? sessionKey : ''
}

export const headers = (sessionKey = "") => ({
  "content-type": "application/json",
  "ref-id": "ref-id",
  "device-type": "web",
  "user-agent-c": "chrome",
  "token": sessionKey,
  "connection": "keep-alive"
})

export const http = {
  get(path, body) {
    return fetch(api + path, {
      method: "GET",
      headers: headers(getSessionKey()),
      body: JSON.stringify(body)
    })
      .then(responseHandler)
      .catch(errorHandler)
  },
  post(path, body) {
    return fetch(api + path, {
      method: "POST",
      headers: headers(getSessionKey()),
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