import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    pagination = (b, c = 0, d) => {
        return Array(d + 1).join("1").split("").map(function (a, b) {
            return b + 1
        }).filter(function (a, e) {
            return c ? 1 == a || a == b || a == d || a <= b + c && a >= b - c : !0
        })
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            pagination={this.pagination}
            setCurrentPage={this.setCurrentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow} />
    }

}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

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



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);