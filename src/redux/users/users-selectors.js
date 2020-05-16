const getUsers = state => state.usersPage && state.usersPage.users;
const getPageSize = state => state.usersPage && state.usersPage.pageSize;
const getTotalUsersCount = state => state.usersPage && state.usersPage.totalUsersCount;
const getCurrentPage = state => state.usersPage && state.usersPage.currentPage;
const getIsFetching = state => state.usersPage && state.usersPage.isFetching;
const getFollowingInProgress = state => state.usersPage && state.usersPage.followingInProgress;

export default {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress};