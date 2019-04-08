import * as actionTypes from './actionType';
import { BASE_URI } from './../globals';

export const getUserApps = () => {
  return async dispatch => {
    dispatch({type: actionTypes.FETCH_APPS_REQUEST});

    try{
      let user = localStorage.getItem('userData')
      user = JSON.parse(user)
      const resObj = await fetch(BASE_URI+'/user/apps', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });

      const res = await resObj.json();
      dispatch({type:actionTypes.FETCH_APPS_SUCCESS,payload:res.data})
    }catch(err){
      dispatch({type:actionTypes.FETCH_APPS_ERROR,payload:err})
    }

  }
}

export const updateApps = ()=>{
  return async dispatch=>{
    dispatch({})
  }
}