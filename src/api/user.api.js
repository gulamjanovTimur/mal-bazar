import {http} from './utils'

const signUp = (data) => {
  return http.post('login/register', data)
}

const signIn = (data) => {
  return http.post('login/signin', data)
}

const checkNumber = (phoneNumber) => {
  return http.post('login/firststep', {phoneNumber})
}

const sendOtpToClient = (phoneNumber) => {
  return http.post('login/sendotp', {phoneNumber})
}

const sendOtpToServer = (data) => {
  return http.post('login/checkotp', data)
}

export default {
  signUp,
  signIn,
  checkNumber,
  sendOtpToClient,
  sendOtpToServer
}