require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'

import  * as types from '../constants/'

export const commentsGetFailed = () => ({
  type: types.comments_error
})

export const commentsWaiting = () => ({
  type: types.comments_submit
})

export const commentsGetAll = (comments) => ({
  type: types.comments_success,
  comments
})

export const getComments = (url, config) => {
  return (dispatch) => {
    dispatch(commentsWaiting())
    if(sessionStorage.getItem('comments')) {
      const comments = JSON.parse(sessionStorage.getItem('comments'));
      dispatch(commentsGetAll(comments))
    } else {
      fetch(url, config)
       .then(response => {
         if(response.status >= 400) {
           throw new Error(response)
         }
         console.log('get all comments')
         return response.json()
       }).then(obj => {
         sessionStorage.setItem('comments', JSON.stringify(obj))
         dispatch(commentsGetAll(obj));
       })
       .catch((err) => dispatch(commentsGetFailed()))
    }

  }
}
