import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => ({
    usersPage:  state.usersPage
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unFollow: (userId) => {
        dispatch(unFollowAC(userId));
    },
    setUsers: users => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: pageNumber => {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalCount => {
        dispatch(setTotalUsersCountAC(totalCount))
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;