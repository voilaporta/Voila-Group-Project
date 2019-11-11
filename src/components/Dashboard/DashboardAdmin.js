import React, {Component} from 'react';
import { connect } from 'react-redux';

class DashboardAdmin extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h1 id="welcome">
                    Welcome, { this.props.user.username }!
                </h1>
                <p>Your ID is: {this.props.user.id}</p>
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

export default connect(mapStateToProps) (DashboardAdmin);