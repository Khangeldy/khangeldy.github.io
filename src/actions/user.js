require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'

import  * as types from '../constants/'

export const userGetFailed = () => ({
  type: types.user_error
})

export const userWaiting = () => ({
  type: types.user_submit
})

export const userGet = (user) => ({
  type: types.user_success,
  user
})

export const getUser = (url, config) => {
  return (dispatch) => {
    dispatch(userWaiting())
    if(sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      dispatch(userGet(user))
    } else {
      fetch(url, config)
       .then(response => {
         if(response.status >= 400) {
           throw new Error(response)
         }
         console.log('get user')
         return response.json()
       }).then(user => {
         sessionStorage.setItem('user', JSON.stringify(user))
         dispatch(userGet(user));
       })
       .catch((err) => dispatch(userGetFailed()))
    }

  }
}
