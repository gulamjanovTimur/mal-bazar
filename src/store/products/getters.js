export function productById (state) {
  return state.data.reduce((pv, cv) => {

    pv[cv.id] = cv
    return pv
  }, {})
}
