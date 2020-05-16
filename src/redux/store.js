/**
 * For remove
 */

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { likes: 11, text: "PostText1" },
                { likes: 12, text: "PostText2" },
                { likes: 13, text: "PostText3" },
            ],
            newPostText: 'NewPostText'
        },
        dialogsPage: {
            messages: [
                { text: "Message 1" },
                { text: "Message 2" },
                { text: "Message 3" },
                { text: "Message 4" },
                { text: "Message 5" },
            ],
            newMessageText: 'NewMessageText',
            dialogs: [
                { id: 1, name: "UserName1", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
                { id: 2, name: "UserName2", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
                { id: 3, name: "UserName3", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
                { id: 4, name: "UserName4", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
                { id: 5, name: "UserName5", ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', },
            ]
        },
        navbar: {
            nav: [
                { url: "profile", text: "Profile" },
                { url: "dialogs", text: "Dialogs" },
                { url: "news", text: "News" },
                { url: "music", text: "Music" },
                { url: "settings", text: "Settings" },
            ],
            friends: [
                { ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', name: "John" },
                { ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', name: "Jack" },
                { ava: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg', name: "Jim" },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _renderApp() {
        console.log('State changing...')
    },
    subscribe(observer) {
        this._renderApp = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._renderApp(this._state);
    }
}


export default store;