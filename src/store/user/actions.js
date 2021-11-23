import api from "src/api"

const user = api.user

export const signIn = ({ commit }, data) => {
  return user.signIn(data)
}

export const signUp = ({ commit }, data) => {
  return user.signUp(data)
}

export const confirmOtp = ({ commit }, data) => {
  return user.confirmOtp(data)
}

export const getUserInfo = ({ commit }) => {
  return user.getUserInfo()
}

export const changeUserName = ({ commit }, data) => {
  return user.changeUserName(data)
}
