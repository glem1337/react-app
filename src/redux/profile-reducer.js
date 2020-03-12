const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_POST = 'ADD_POST';

const initialState = {
    posts: [
        { likes: 11, text: "PostText1" },
        { likes: 12, text: "PostText2" },
        { likes: 13, text: "PostText3" },
    ],
    newPostText: 'NewPostText'
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
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;