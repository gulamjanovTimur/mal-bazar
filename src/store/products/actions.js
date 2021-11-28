import api from "src/api"

const products = api.products

export const getOfficeProducts = ({ commit }) => {
  return products.getOfficeProducts()
}

export const createNewProduct = ({ commit }, data) => {
  return products.createNewProduct(data)
}