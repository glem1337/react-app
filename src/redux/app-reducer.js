import {auth} from "./auth-reducer";

const SET_INIT = 'SET_INIT';

const initialState = {
    isInit: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                isInit: true
            };
        default:
            return state;
    }
};


const setInit = () => ({type: SET_INIT});

export const initApp = () => async dispatch => {
    try {
        await dispatch(auth());
        dispatch(setInit());
    } catch (e) {
        console.warn('Error:', e);
    }
};

export default appReducer