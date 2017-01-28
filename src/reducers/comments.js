import * as types from '../constants'

const initialState = {
  getAll: null,
  onError: false,
  pending: false
}

const comments = (state = initialState, action) => {
  switch(action.type) {
    case types.comments_error:
      return {
        onError: true,
        getAll: false,
        pending: false
      }
    case types.comments_success:
      return {
        onError: false,
        getAll: action.comments,
        pending: false
      }
    case types.comments_submit:
      return {
        getAll: false,
        onError: false,
        pending: true
      }
    default:
      return state;
  }
}

export default comments;
