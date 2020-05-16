import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {getUsers, unfollowThunk, followThunk} from '../../redux/users/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import usersSelectors from '../../redux/users/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                this.props.isFetching ? <Preloader/> : undefined
            }
            <Users {...this.props} pagination={this.pagination} setCurrentPage={this.setCurrentPage}/>
        </>
    }

}

const mapStateToProps = (state) => ({
    users: usersSelectors.getUsers(state),
    pageSize: usersSelectors.getPageSize(state),
    totalUsersCount: usersSelectors.getTotalUsersCount(state),
    currentPage: usersSelectors.getCurrentPage(state),
    isFetching: usersSelectors.getIsFetching(state),
    followingInProgress: usersSelectors.getFollowingInProgress(state)
});

const mapDispatchToProps = {
    getUsers,
    unfollowThunk,
    followThunk
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersContainer);