import api from "src/api"

const user = api.user

export const registration = ({ commit }, data) => {
  return user.registration(data)
}