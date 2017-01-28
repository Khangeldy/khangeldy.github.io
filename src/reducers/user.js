import * as types from '../constants'

const initialState = {
  user: {},
  pending: false
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case types.user_error:
      return {
        ...state,
        pending: false,
        onError: true
      }
    case types.user_success:
      return {
        ...state,
        pending: false,
        user: action.user,
      }
    case types.user_submit:
      return {
        ...state,
        pending: true
      }
    default:
      return state;
  }
}

export default user;
