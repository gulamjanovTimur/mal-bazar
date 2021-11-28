import {http} from './utils'

const getOfficeProducts = () => {
  return http.get('adverts/userAdverts')
}

const createNewProduct = (data) => {
  return http.post('adverts/createAdvert', data)
}

export default {
  getOfficeProducts,
  createNewProduct
}