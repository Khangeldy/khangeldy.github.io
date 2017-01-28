require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'

import  * as types from '../constants/'
import { getComments } from './getComments'

export const newCommentNotSaved = () => ({
  type: types.new_c_fail
})

export const newCommentPending = () => ({
  type: types.new_c_pend
})

export const newCommentSuccess = () => ({
  type: types.new_c_succ
})

export const newComment = (url, config, callback) => {
  return (dispatch) => {
    dispatch(newCommentPending())
    return fetch(url, config)
       .then(response => {
         if(response.status >= 400) {
           throw new Error(response)
         }
         console.log('new comment')
         return response.json()
       }).then(obj => {
         dispatch(newCommentSuccess());
         sessionStorage.removeItem('comments')
         dispatch(getComments('http://109.120.189.5:8081/comments?filter={"limit":50,"sort": "-createdAt"}'))
         return 'foo'
       })
       .catch((err) => {
         dispatch(newCommentNotSaved())
         return 'bar'
       })

  }
}
