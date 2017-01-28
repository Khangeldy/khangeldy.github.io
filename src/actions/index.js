require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'
import  * as types from '../constants'

export const registerHasErrored = () => ({
  type: types.r_error
})

export const registeringAction = () => ({
  type: types.r_submit
})

export const registerHasSuccess = () => ({
  type: types.r_success
})

export const registerAction = (url, config) => {
  return (dispatch) => {
    dispatch(registeringAction())
    fetch(url, config)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response)
        }
        dispatch(registerHasSuccess())
        console.log('success')
      })
      .catch((err) => dispatch(registerHasErrored()))
  }
}
