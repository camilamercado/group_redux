import * as types from '../constants.js'
import fetch from 'isomorphic-fetch'

export function setLink(link) {
  return dispatch => {
    //console.log("setting link!", link)
    dispatch({ 'type': 'SET_LINK', 'link': link})
  }
}
