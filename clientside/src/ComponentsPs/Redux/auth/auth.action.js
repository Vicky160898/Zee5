
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from './auth.type';
import axios  from 'axios';
export const authSignInLoading = () => {
    return { type: AUTH_SIGN_IN_LOADING }
}
export const authSignInError = () => {
    return { type: AUTH_SIGN_IN_ERROR }
}
export const authSignUpLoading = () => {
    return { type: AUTH_SIGN_UP_LOADING }
}
export const authSignUpError = () => {
    return { type: AUTH_SIGN_UP_ERROR }
}

export const authSignInSucess = (payload) => async(dispatch)=> {
    let res = await axios.post(`http://localhost:8080/login`, payload);
    console.log(payload)
    return dispatch({
        type: AUTH_SIGN_IN_SUCCESS,
        payload: res.data
    })
}

export const authSignUpSucess = (payload) => async (dispatch) => {
    console.log(payload)
    let res = await axios.post(`http://localhost:8080/signup`, payload);
    return dispatch({
        type: AUTH_SIGN_UP_SUCCESS,
        payload: res.data
    })
}

export const authSignOut = () => {
    return {
        type: AUTH_SIGN_OUT
    }
}