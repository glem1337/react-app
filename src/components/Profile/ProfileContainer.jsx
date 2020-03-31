import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfileThunk} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setProfileThunk(userId);
    }


    render() {
        {
            if (!this.props.profile) return <Preloader/>
        }
        return <Profile profile={this.props.profile}/>
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default compose(connect(mapStateToProps, {setProfileThunk}), withAuthRedirect, withRouter)(ProfileContainer);