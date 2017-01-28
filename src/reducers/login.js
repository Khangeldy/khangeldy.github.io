import * as types from '../constants'
const initialState = {
  onSuccess: false,
  onError: false,
  pending: false
}
const login = (state = initialState, action) => {
  switch(action.type) {
    case types.l_error:
      return {
        onError: true,
        onSuccess: false,
        pending: false
      }
    case types.l_success:
      return {
        onError: false,
        onSuccess: true,
        pending: false
      }
    case types.l_submit:
      return {
        onSuccess: false,
        onError: false,
        pending: true
      }
    default:
      return state;
  }
}

export default login;
