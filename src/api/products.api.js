import {http} from './utils'

const getOfficeProducts = () => {
  return http.get('adverts/userAdverts')
}

export default {
  getOfficeProducts
}