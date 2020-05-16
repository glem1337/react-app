import {createSelector} from "reselect";

const getUsersSelector = state => state.usersPage && state.usersPage.users;
const getPageSize = state => state.usersPage && state.usersPage.pageSize;
const getTotalUsersCount = state => state.usersPage && state.usersPage.totalUsersCount;
const getCurrentPage = state => state.usersPage && state.usersPage.currentPage;
const getIsFetching = state => state.usersPage && state.usersPage.isFetching;
const getFollowingInProgress = state => state.usersPage && state.usersPage.followingInProgress;

const getUsers = createSelector(
    getUsersSelector,
    users => users.filter(user => true) // some logic
);

export default {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress};