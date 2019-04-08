import * as actionTypes from './../actions/actionType';
let initialAppState = {
    status:'IDLE',
    err:null,
    data:[]
}

export const app = (state=initialAppState,action)=>{
  switch (action.type) {
    case actionTypes.FETCH_APPS_REQUEST:
      return {...state,status:'LOADING'}
    case actionTypes.FETCH_APPS_SUCCESS:
      return {
        ...state,
        status:'SUCCESS',
        data:action.payload
      }
    case actionTypes.FETCH_APPS_ERROR:
      return {
        ...state,
        status:'FAIL'
      }
    default:
      return state
  }
}