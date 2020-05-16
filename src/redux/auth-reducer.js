import { authApi } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, login, email, isAuth } });


export const auth = () => {
    return dispatch => {
        return authApi.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                }
            });
    }
};

export const login = (email, password, rememberMe, captcha) => {
    return dispatch => {
        authApi.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(auth());
                } else {
                    dispatch(stopSubmit('login', {
                        _error: response.data.messages[0]
                    } ));
                }
            });
    }
};

export const logout = () => {
    return dispatch => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
};

export default authReducer;