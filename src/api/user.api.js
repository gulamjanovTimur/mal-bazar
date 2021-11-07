import {http} from './utils'

const registration = (data) => {
  return http.post('register', data)
}

export default {
  registration
}