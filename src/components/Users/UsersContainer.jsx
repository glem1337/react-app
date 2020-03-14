import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer';

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
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;