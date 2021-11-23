import api from "src/api"

const products = api.products

export const getOfficeProducts = ({ commit }) => {
  return products.getOfficeProducts()
}