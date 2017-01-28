import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import register from './register'
import login from './login'
import comments from './comments'
import user from  './user'
import newComment from './newComment'

const reducers = combineReducers({
  register,
  login,
  comments,
  user,
  newComment,
  routing: routerReducer
});

export default reducers
