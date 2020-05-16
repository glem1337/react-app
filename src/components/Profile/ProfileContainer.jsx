import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfileThunk, getStatusThunk, updateStatusThunk} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.setProfile();
    }

    setProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.setProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidUpdate(prevProps) {
            if (this.props.match.params.userId !== prevProps.profile?.userId) {
                this.setProfile();
            }
    }


    render() {
        {
            if (!this.props.profile) return <Preloader/>
        }
        return <Profile profile={this.props.profile} status={this.props.status}
                        updateStatusThunk={this.props.updateStatusThunk}/>
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId
});


export default compose(connect(mapStateToProps, {
    setProfileThunk,
    getStatusThunk,
    updateStatusThunk
}), withRouter, withAuthRedirect)(ProfileContainer);