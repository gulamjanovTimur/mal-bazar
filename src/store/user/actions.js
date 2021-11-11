import api from "src/api"

const user = api.user

export const signUp = ({ commit }, data) => {
  return user.signUp(data)
}

export const signIn = ({ commit }, data) => {
  return user.signIn(data)
}

export const checkNumber = ({ commit }, data) => {
  return user.checkNumber(data)
}

export const sendOtpToClient = ({ commit }, data) => {
  return user.sendOtpToClient(data)
}

export const sendOtpToServer = ({ commit }, data) => {
  return user.sendOtpToServer(data)
}
