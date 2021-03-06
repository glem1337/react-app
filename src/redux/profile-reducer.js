import {authApi, profileApi} from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {likes: 11, text: "PostText1"},
        {likes: 12, text: "PostText2"},
        {likes: 13, text: "PostText3"},
    ],
    profile: null,
    status: 'Empty status'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {likes: 0, text: action.post}]
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }
        case SET_STATUS:
            return {
                ...state,
                status:  action.status || 'Empty status'
            }
        default:
            return state;
    }
}


export const addPost = (post) => ({type: ADD_POST, post});
export const setProfile = profileData => ({type: SET_PROFILE, profileData});
export const setStatus = status => ({type: SET_STATUS, status});


export const setProfileThunk = (userId) => {
    return dispatch => {
        authApi.getProfile(userId)
            .then(data => {
                dispatch(setProfile(data));
            })
    }
};

export const getStatusThunk = (userId) => {
    return dispatch => {
        profileApi.getStatus(userId)
            .then(response => {
                if (response.data === null) {
                    dispatch(setStatus('Please type some status'));
                } else {
                    dispatch(setStatus(response.data));
                }
            })
    }
};

export const updateStatusThunk = (status) => {
    return dispatch => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
};

export default profileReducer;