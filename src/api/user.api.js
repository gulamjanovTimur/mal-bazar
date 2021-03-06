import {http} from './utils'

const signIn = (data) => {
  return http.post('login/signin', data)
}

const signUp = (phoneNumber) => {
  return http.post('login/firstStep', { phoneNumber })
}

const confirmOtp = (data) => {
  return http.post('login/secondStep', data)
}

const getUserInfo = () => {
  return http.get('cabinet/userInfo')
}

const changeUserName = (username) => {
  return http.post('cabinet/updateName', { username })
}

export default {
  signUp,
  signIn,
  confirmOtp,
  getUserInfo,
  changeUserName
}