import * as types from '../constants'
const initialState = {
  onSuccess: false,
  onError: false,
  pending: false
}
const register = (state = initialState, action) => {
  switch(action.type) {
    case types.r_error:
      return {
        onError: true,
        onSuccess: false,
        pending: false
      }
    case types.r_success:
      return {
        onError: false,
        onSuccess: true,
        pending: false
      }
    case types.r_submit:
      return {
        onSuccess: false,
        onError: false,
        pending: true,
      }
    default:
      return state;
  }
}

export default register;
