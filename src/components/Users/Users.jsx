import React from 'react';
import s from './Users.module.css'
import userPlaceholder from '../../assets/images/user.jpg'



let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div>
            <div className={s.pagination}>
                {
                    props.pagination(props.currentPage, props.pageSize, pagesCount).map(element => {
                        return <span key={element} onClick={(e) => { props.setCurrentPage(element) }} className={props.currentPage === element ? s.active : undefined}>{element}</span>
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return <div className={s.user} key={user.id}>
                        <div className={s.userLeft}>
                            <img src={user.photos.small != null ? user.photos.small : userPlaceholder} alt="" />
                            <div>{user.name}</div>
                            {user.followed ? <button onClick={() => props.unFollow(user.id)}>Unfollow</button> : <button onClick={() => props.follow(user.id)}>Follow</button>}
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
    )

}


export default Users;