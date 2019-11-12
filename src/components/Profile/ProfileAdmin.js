import React, {Component} from 'react';
import { connect } from 'react-redux';
// import SpeedDialCreate from '../MaterialUIComponents/SpeedDialCreate';
import CreateClient from '../CreateClient/CreateClient';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1 id="welcome">
                    Profile
                </h1>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
user: state.user,
});

export default connect(mapStateToProps) (Profile);