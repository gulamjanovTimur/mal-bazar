import {http} from './utils'

const registration = (data) => {
  return http.post('login/register', data)
}

export default {
  registration
}