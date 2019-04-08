import * as actionTypes from './actionType';
import { BASE_URI } from './../globals';

export const loginUser = data => {
  return async dispatch => {
    dispatch({type: actionTypes.LOGIN_USER_REQUEST});

    try{

      const resObj = await fetch(BASE_URI+'/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const res = await resObj.json();
      
      if(res.err){
        dispatch({
          type: actionTypes.LOGIN_USER_ERROR,
          data: res.err.toString()
        })
        alert(res.err.toString());
      }
      else{
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(res.data));
        dispatch({
          type: actionTypes.LOGIN_USER_SUCCESS,
          payload: res.data
        })
      }
    }catch(err){
      dispatch({
        type: actionTypes.LOGIN_USER_ERROR,
        payload: err.toString()
      });
      alert(err.toString())
    }
  }
}