import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import userPlaceholder from '../../assets/images/user.jpg'



class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize);

        return <div>
            <div className={s.pagination}>
                {
                    this.pagination(this.props.usersPage.currentPage, this.props.usersPage.pageSize, pagesCount).map(element => {
                        return <span onClick={(e) => { this.setCurrentPage(element) }} className={this.props.usersPage.currentPage === element && s.active}>{element}</span>
                    })
                }
            </div>

            {
                this.props.usersPage.users.map(user => {
                    return <div className={s.user} key={user.id}>
                        <div className={s.userLeft}>
                            <img src={user.photos.small != null ? user.photos.small : userPlaceholder} alt="" />
                            <div>{user.name}</div>
                            {user.followed ? <button onClick={() => this.props.unFollow(user.id)}>Unfollow</button> : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                        </div>
                        <div className={s.userRight}>
                            <div>Status: {user.status}</div>
                            {/* <div>City: {user.location.cityName}</div> */}
                            {/* <div>Country: {user.location.country}</div> */}
                        </div>
                    </div>
                })
            }
        </div>
    }

}


export default Users;