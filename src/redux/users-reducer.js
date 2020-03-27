import { usersApi } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.status ?
                [...state.followingInProgress, action.userId] :
                [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}

export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = pageNumber => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (status, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, status, userId });

export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
};

export const unfollowThunk = (userId) => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        usersApi.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
};

export const followThunk = (userId) => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        usersApi.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
};

export default usersReducer;