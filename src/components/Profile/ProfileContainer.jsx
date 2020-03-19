import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
import { setProfile } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data);
            })
    }


    render() {
        {
            if(!this.props.profile) return <Preloader />
        }
        return <Profile profile={this.props.profile} />
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setProfile })(ProfileContainer);