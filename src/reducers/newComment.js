import * as types from '../constants'

const initialState = {
  pending: false
}


const newComment = (state = initialState, action) => {
  switch(action.type) {
    case types.new_c_fail:
      return {
        ...state,
        pending: false,
        onError: true
      }
    case types.new_c_succ:
      return {
        ...state,
        pending: false,
        onSuccess: true
      }
    case types.new_c_pend:
      return {
        ...state,
        pending: true
      }
    default:
      return state;
  }
}

export default newComment;
