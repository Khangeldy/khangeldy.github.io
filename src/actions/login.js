require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import  * as types from '../constants/'

export const loginHasErrored = () => ({
  type: types.l_error
})

export const loginingAction = () => ({
  type: types.l_submit
})

export const loginHasSuccess = () => ({
  type: types.l_success
})

export const loginAction = (url, config) => {
  return (dispatch) => {
    dispatch(loginingAction())
     return fetch(url, config)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response)
        }
        console.log('logged in')
        return response.json()
      }).then(obj => {
        dispatch(loginHasSuccess());
        sessionStorage.setItem('authToken', obj.accessToken)
        browserHistory.push('/')
      })
      .catch((err) => dispatch(loginHasErrored()))
  }
}
