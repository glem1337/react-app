import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users/users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));


window.store = store;

export default store;