import * as actionTypes from './../actions/actionType';

let initialState = {
  isLoading: false,
  hasError: false,
  errMsg: '',
  data: [] 
}

export const userReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOGIN_USER_REQUEST:
      return {...state, isLoading: true, hasError: false, errMsg: ''};
    case actionTypes.LOGIN_USER_SUCCESS:
      return {...state, isLoading: false, data: action.payload};
    case actionTypes.LOGIN_USER_ERROR:
      return {...state, isLoading: false, errMsg: action.payload, hasError: true};
    default:
      return state;
  }
}

