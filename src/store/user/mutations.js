export function updateSignUpPhone (state, val) {
  state.signUp.phoneNumber = val
}

export function updateSignUpPassword (state, val) {
  state.signUp.password = val
}

export function updateAuth (state, payload) {
  state.auth = payload
}
