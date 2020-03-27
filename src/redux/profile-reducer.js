import { authApi } from '../api/api';

const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
    posts: [
        { likes: 11, text: "PostText1" },
        { likes: 12, text: "PostText2" },
        { likes: 13, text: "PostText3" },
    ],
    newPostText: 'NewPostText',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { likes: 0, text: state.newPostText }]
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }
        default:
            return state;
    }
}

export const updateNewPostText = (text) => ({ type: UPDATE_POST_TEXT, text: text });
export const addPost = () => ({ type: ADD_POST });
export const setProfile = profileData => ({ type: SET_PROFILE, profileData });


export const setProfileThunk = (userId) => {
    return dispatch => {
        if (!userId) {
            authApi.me()
                .then(data => {
                    authApi.getProfile(data.data.id)
                        .then(data => {
                            dispatch(setProfile(data));
                        })
                });
        } else {
            authApi.getProfile(userId)
                .then(data => {
                    dispatch(setProfile(data));
                })
        }
    }
};

export default profileReducer;