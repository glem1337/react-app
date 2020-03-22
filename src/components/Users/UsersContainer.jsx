import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersApi } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    setCurrentPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    //pagination(current, step, max ) step = 0 полный диапазон
    pagination = (b, c = 0, d) => {
        return Array(d + 1).join("1").split("").map(function (a, b) {
            return b + 1
        }).filter(function (a, e) {
            return c ? 1 == a || a == b || a == d || a <= b + c && a >= b - c : !0
        })
    }

    render() {
        return <>
            {
                this.props.isFetching ? <Preloader /> : undefined
            }
            <Users {...this.props} pagination={this.pagination} setCurrentPage={this.setCurrentPage} />
        </>
    }

}

const mapStateToProps = (state) => ({
    ...state.usersPage
});

const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);